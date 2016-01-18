package one.piece

import grails.transaction.Transactional
import org.apache.commons.logging.LogFactory
import org.jsoup.HttpStatusException
import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.jsoup.nodes.Element

@Transactional
class CrawlerJob {
    private static final log = LogFactory.getLog(this)

    public static final String SITE_CRAWLER = "http://onepiece.wikia.com/wiki/"
    public static final String SITE = "http://onepiece.wikia.com"
    List<Figure> figures;

    static triggers = {
        // simple repeatInterval: 3600000, startDelay: 10000
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
        Document doc = Jsoup.connect(SITE_CRAWLER + "Devil_Fruit").get();
        // Get the content inside the table Devil Fruit, witch is the type and
        // name of fruits, separated by type.
        def fruitTable = doc.select("table[title=Devil Fruits Navibox]").first().select("table.collapsible");
        for (index in fruitTable) {
            // get the type of the fruits.
            defFruitType = index.select("th").text();
            def fruitsName = index.select("td[style = text-align: left;]").select("a");
            for (fruitName in fruitsName) {
                new DevilFruit(defName: fruitName.text(), defType: defFruitType).save()
            }

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
                log.info(i + " of " + figures.size() + "Characters Done!")
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
        while (r) {
            r = getCharactersEpisode(SITE_CRAWLER + "Episode_" + i.toString(), i)
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
    public boolean getCharactersEpisode(String URL, int epNumber) {
        int attempt = 0
        try {
            Document doc = Jsoup.connect(URL).timeout(1000000).get()

            def episode = new AnimeEpisode(aneName: doc.select("th").first().text(), aneNumber: epNumber).save(flush: true, failOnError: true)
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
            log.error("Fail to catch Episode number: " + chNumber + " on link: " + URL);
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
