package one.piece

import grails.transaction.Transactional
import org.apache.commons.logging.LogFactory
import org.jsoup.HttpStatusException
import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.jsoup.nodes.Element
import org.jsoup.select.Elements

@Transactional
class CrawlerJob {
    private static final log = LogFactory.getLog(this)

    public static final String SITE_CRAWLER = "http://onepiece.wikia.com/wiki/"
    public static final String SITE = "http://onepiece.wikia.com"
    List<Figure> figures;

    static triggers = {
        simple repeatInterval: 3600000, startDelay: 10000
    }

    /**
     * Process the URL and return the Info Box data.
     * @param URL
     * @return ArrayList with all infomation of page's Infobox
     * @throws IOException
     */
    public static HashMap<String, Element> returnInfoBox(String URL) throws IOException {
        Document doc = Jsoup.connect(SITE + URL).timeout(1000000).get()
        boolean isDvFruitInfo = false;
        def infoBoxData = new HashMap<String, Element>()
        // select documents by class "infobox", class of info boxes
        def iBox = doc.select("table.infobox").first();
        if (iBox != null) {
            def citations = iBox.select("sup.reference");
            if (citations != null) {
                citations.remove();
            }
            def boxContent = iBox.select("tr")
            infoBoxData.put("Image", boxContent.select("img").first());
            for (it in boxContent) {
                def charInfo = it.select("td")
                if (charInfo.size() > 1) {
                    if (isDvFruitInfo) {
                        infoBoxData.put("Devil Fruit", charInfo[1]);
                        break;
                    }
                    infoBoxData.put(charInfo.first().text(), charInfo[1])
                } else {
                    if (charInfo.text().contains("Devil Fruit")) {
                        isDvFruitInfo = true;
                    }
                }
            }
        }
        return infoBoxData
    }

    /**
     * fetch all episodes ratings on IMdB
     * @throws IOException
     */
    public List<AnimeEpisode> getRatingForEpisode() throws IOException {
        List<AnimeEpisode> episodes = new LinkedList<AnimeEpisode>()
        Document doc = Jsoup.connect("http://www.imdb.com/title/tt0388629/epdate").userAgent("Chrome").maxBodySize(0).timeout(900000).get();
        def elementRatings = doc.select("h4:contains(Rated Episodes)").first().nextElementSibling();
        elementRatings = elementRatings.select("tr");
        for (index in elementRatings) {
            def episodeRating = index.select("td");
            if (episodeRating != null && episodeRating.size() > 0 && episodeRating.get(0).text().contains('.')) {
                String[] episodeSeason = episodeRating.get(0).text().tokenize('.');
                AnimeEpisode episode = new AnimeEpisode();
                episodeSeason[1] = episodeSeason[1].replace(String.valueOf((char) 160), " ").trim();
                episode.aneSeasonNr = Integer.parseInt(episodeSeason[0].trim());
                episode.aneEpisodeNr = Integer.parseInt(episodeSeason[1]);
                episode.aneNumVotes = Integer.parseInt(episodeRating.get(3).text());
                episode.aneRate = Float.parseFloat(episodeRating.get(2).text());
                episode.aneIMdBUrl = "http://www.imdb.com" + episodeRating.get(1).select("a").attr("href")
                episodes.add(episode);
            }
        }
        return episodes;
    }

    /**
     Get the name of all Gangs portrayed in Series and Manga
     * @throws IOException
     */
    public void getGangs() throws IOException {
        Document doc = Jsoup.connect(SITE_CRAWLER + "Category:Pirate_Crews").get();
        // Get the content inside the table Gangs.
        def gangs = doc.select("table[title=Pirate Crews Navibox]").first().select("table.collapsible")
                .select("td[style = text-align: left;]").select("a");
        for (index in gangs) {
            new Gang(ganName: index.text()).save()
        }
    }
    /**
     * get the name and type of all Devil Fruits who appear on Mangas or Episodes of One Piece
     * @throws IOException
     */
    public void getDevilFruit() throws IOException {
        def defFruitType;
        String defAbility = null;
        Document doc = Jsoup.connect(SITE_CRAWLER + "Devil_Fruit").get();
        // Get the content inside the table Devil Fruit, witch is the type and
        // name of fruits, separated by type.
        def fruitTable = doc.select("table[title=Devil Fruits Navibox]").first().select("table.collapsible");
        for (index in fruitTable) {
            // get the type of the fruits.
            defFruitType = index.select("th").text();
            Elements fruitsAbilities = getDevilFruitAbilities(index.select("th").first().select("a").attr("href"));

            def fruitsName = index.select("td[style = text-align: left;]").select("a");
            for (fruitName in fruitsName) {
                if (fruitsAbilities != null && fruitsAbilities.size() > 0) {
                    def fruitAbility = fruitsAbilities.select("li:contains(" + fruitName.text() + "");
                    if (fruitAbility != null) {
                        int removeBegin = fruitAbility.text().indexOf("(")
                        int removeEnd = fruitAbility.text().indexOf(")");
                        def fruitInformation = fruitAbility.text();
                        if (removeBegin > 0 || removeEnd > 0) {
                            fruitInformation = fruitAbility.text().replace(fruitAbility.text().substring(removeBegin, removeEnd + 1), "");
                        }
                        String[] f = fruitInformation.tokenize(":");
                        if (f.size() > 1) {
                            defAbility = f[1].trim();
                        }
                    }
                }
                new DevilFruit(defName: fruitName.text(), defType: defFruitType, defMeaning: defAbility).save()
                defAbility = null;
            }

        }
    }

    private Elements getDevilFruitAbilities(String URL) throws IOException {
        Document doc = Jsoup.connect(SITE + URL).get();
        Elements fruits = new Elements();
        def fruit = doc.select("h2:contains(List of Known)").first();
        if (fruit != null) {
            fruit = fruit.nextElementSibling();
            while (fruit.nextElementSibling().tagName() != "h2") {
                fruits.addAll(fruit.select("li"));
                fruit = fruit.nextElementSibling();
            }
            return fruits;
        }
    }

/**
 * Complete the information for each character crawled, with the information on onepiece.wikia, based in the infobox.
 */
    public void completeCharactersInfo() {
        def i = 0;
        for (index in figures) {
            i++;
            def info = returnInfoBox(index.url);
            if (info.get("Devil Fruit") != null) {
                index.devilFruit = DevilFruit.findByDefName(info.get("Devil Fruit").text());
            }
            if (info.get("Occupations:") != null && info.get("Affiliations:") != null) {

                if (info.get("Occupations:").text().contains("Pirate")) {
                    def pirate = new Pirate();
                    if (info.get("Bounty:") != null) {
                        pirate.pirBounty = info.get("Bounty:").text();
                    }
                    pirate.pirPosition = info.get("Occupations:").text();
                    def gangs = info.get("Affiliations:").select("a");
                    if (gangs != null) {
                        for (it in gangs) {
                            def gang = Gang.findByGanName(it.text());
                            if (gang != null) {
                                gang.addToPirates(pirate);
                            }
                        }
                    }
                    pirate.figure = index;
                    pirate = pirate.save();
                    index.pirate = pirate;
                }
                if (info.get("Affiliations:").text().contains("Marine")) {
                    def marine = new Marine()
                    marine.figure = index;
                    marine.marRank = info.get("Occupations:").text();
                    marine = marine.save();
                    index.marine = marine;
                }
            }
            if (info.get("Age:") != null) {
                index.figAge = info.get("Age:").text();
            }
            if (info.get("Status:") != null) {
                index.figStatus = info.get("Status:").text();
            }
            if (info.get("Image") != null) {
                index.figPicture = info.get("Image").attr("src");
            }
            index.save();
            if (i % 10 == 0) {
                log.info(i + " of " + figures.size() + " Characters Done!")
            }
        }
    }

/**
 * define races by character, humans are not redefined due more efficiency.
 * @throws IOException
 */
    public void defineRace() throws IOException {
        Document doc = Jsoup.connect(SITE_CRAWLER + "Category:Characters_by_Type").get();
        def races = doc.select("a.CategoryTreeLabel");
        for (index in races) {
            if (index.text() != "Humans") {
                defineCharacterRace(index.text())
            }
        }

    }

/**
 * Get characters races by specific race page.
 * @throws IOException
 * @param race
 */
    private void defineCharacterRace(String race) throws IOException {
        Document doc = Jsoup.connect(SITE_CRAWLER + "Category:" + race).get();
        def characters = doc.getElementById("mw-pages").select("a");
        for (index in characters) {
            def fig = new Figure()
            fig.figName = index.text();
            def a = figures.indexOf(fig)
            if (a > 0) {
                fig = figures.get(a);
                fig.figRace = race;
                fig.save(flush: true);
            }
        }
    }

/**
 * get all characters name
 */
    public void getCharactersName() {
        figures = new ArrayList<Figure>()
        addCharacters("List_of_Canon_Characters")
        addCharacters("List_of_Non_Canon_Characters")
    }

    private void addCharacters(String URL) {
        Document doc = Jsoup.connect(SITE_CRAWLER + URL).get();
        def lineInformation = doc.select("table.wikitable").first().select("tr");
        for (index in lineInformation) {
            def a = index.select("td")
            if (index.select("td") != null && a.size() > 0) {
                // Humans as default, then if not human is changed later.
                def fig = new Figure();
                fig.figName = index.select("td").get(1).select("a").text();
                fig.figRace = "Humans";
                fig.url = index.select("td").get(1).select("a").attr("href");
                figures.add(fig.save())
            }
        }
    }

/**
 * Get the Episodes and Chapters and the Characters who are in.
 */
    private void mapCharactersByApparition() {
        def r = true
        def i = 1
        def episodes = getRatingForEpisode();
        while (r) {
            r = getCharactersEpisode(SITE_CRAWLER + "Episode_" + i.toString(), i, episodes)
            i++
            if (i % 10 == 0) {
                log.info("until " + i + "th Episode Done!")
            }
        }
        r = true
        i = 1
        while (r) {
            r = getCharactersManga(SITE_CRAWLER + "Chapter_" + i.toString(), i)
            i++
            if (i % 10 == 0) {
                log.info("until " + i + "th Chapter Done!")
            }
        }
    }

/**
 * saves in the database the episode's name and the characters of these episode.
 * @param URL
 * @param epNumber
 */
    public boolean getCharactersEpisode(String URL, int epNumber, List<AnimeEpisode> episodes) {
        int attempt = 0
        try {
            Document doc = Jsoup.connect(URL).timeout(1000000).get();
            def episode;
            if (episodes.size() > epNumber) {
                episode = episodes.get(epNumber - 1);
            } else {
                episode = new AnimeEpisode();
            }
            episode.aneName = doc.select("th").first().text();
            episode.aneNumber = epNumber;
            episode.save(flush: true, failOnError: true)
            Figure fig;
            def charTable = doc.select("h2:contains(Characters in Order of Appearance)").first().nextElementSibling().select("li")
            for (index in charTable) {
                fig = new Figure()
                fig.figName = index.select("a").text()
                if (figures.contains(fig) != null) {
                    def a = figures.indexOf(fig)
                    if (a > 0) {
                        fig = figures.get(a)
                        episode.addToFigures(fig).save(failOnError: true)
                    }
                }
            }
            return true
        }
        catch (NullPointerException ex) {
            log.error("Fail to catch Episode number: " + epNumber + " on link: " + URL);
            return true;
        }
        // catch if the web page doesn't exist, meaning that we already have the last episode
        catch (HttpStatusException e) {
            if (e.statusCode == 410 || e.statusCode == 404) {
                log.info("stopped in: " + epNumber)
                return false
            } else {
                attempt.next();
                if (attempt < 4) {
                    getCharactersEpisode(URL, epNumber)
                }
            }
        }
        catch (SocketException ex) {
            attempt.next();
            if (attempt < 4) {
                getCharactersEpisode(URL, epNumber)
            }
        }
    }

/**
 * saves in the database the chapter's name and the characters on manga's chapter.
 * @param URL
 */
    public boolean getCharactersManga(String URL, int chNumber) throws IOException {
        int attempt = 0;
        try {
            Document doc = Jsoup.connect(URL).timeout(1000000).get();
            def chapter = new MangaEpisode(maeName: doc.select("th").first().text(), maeNumber: chNumber).save(flush: true, failOnError: true)
            def characters = doc.select("table.CharTable").select("li").select("a");
            Figure fig;
            for (element in characters) {
                fig = new Figure()
                fig.figName = element.text()
                if (figures.contains(fig) != null) {
                    def a = figures.indexOf(fig)
                    if (a > 0) {
                        fig = figures.get(a)
                        chapter.addToFigures(fig).save(failOnError: true)
                    }
                }
            }
            return true
        }
        catch (NullPointerException ex) {
            log.error("Fail to catch Chapter number: " + chNumber + " on link: " + URL);
            return true;
        }
        // catch if the web page doesn't exist, meaning that we already have the last chapter
        catch (HttpStatusException e) {
            if (e.statusCode == 410 || e.statusCode == 404) {
                log.info("stopped in: " + chNumber)
                return false
            } else {
                attempt.next();
                if (attempt < 4) {
                    getCharactersManga(URL, chNumber)
                }
            }
        }
        catch (SocketException ex) {
            attempt.next();
            if (attempt < 4) {
                getCharactersManga(URL, chNumber)
            }
        }
    }


    def execute() {
        def startTime = System.currentTimeMillis();
        log.info("Process Start");
        getDevilFruit();
        log.info("Devil Fruit Done!");
        getGangs();
        log.info("Gangs Done!")
        getCharactersName();
        log.info("Characters Name Done!");
        mapCharactersByApparition();
        log.info("Characters mapped Done!");
        completeCharactersInfo();
        log.info("Characters info Done");
        defineRace();
        log.info("Races defined!");
        def totalTime = System.currentTimeMillis() - startTime
        log.info("Crawling Completed in " + totalTime.toString() + "!");
    }

}
