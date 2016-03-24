package one.piece

import com.google.common.base.Splitter
import grails.transaction.Transactional
import org.apache.commons.logging.LogFactory
import org.jsoup.HttpStatusException
import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.jsoup.nodes.TextNode
import org.jsoup.select.Elements

@Transactional
class CrawlerJob {
    private static final log = LogFactory.getLog(this)

    private static final String SITE_CRAWLER = "http://onepiece.wikia.com/wiki/"
    private static final String SITE = "http://onepiece.wikia.com"
    private static final SEMICOLON_SPLITTER = Splitter.on(";")
    List<Figure> figures;

    static triggers = {
        simple repeatInterval: 3600000, startDelay: 10000
    }

    /**
     * Process the URL and parse the Info Box data.
     * @param URL
     * @return ArrayList with all infomation of page's Infobox
     * @throws IOException
     */
    public static HashMap<String, String> parseInfoBox(String URL) throws IOException {
        Document doc = Jsoup.connect(SITE + URL).timeout(1000000).get()
        def infoBoxData = new HashMap<String, String>()
        def wholeInfoBox = doc.select("aside.portable-infobox").first();
        if (wholeInfoBox != null) {
            def citations = wholeInfoBox.select("sup");
            if (citations != null) {
                citations.remove();
            }
            wholeInfoBox.select("a").unwrap()
            def infoBoxDivs = wholeInfoBox.select("div")

            def image = wholeInfoBox.select("img").first()
            if (image != null) {
                infoBoxData.put("Image", image.attr("src"));
            }

            def selections = wholeInfoBox.select("section")
            for (selection in selections) {
                def dataValues = infoBoxDivs.select("div.pi-data")
                def heading = selection.select("h1, h2, h3, h4, h5, h6").select('.pi-header').text()
                if (heading.equalsIgnoreCase("Statistics")) {
                    infoBoxData.putAll(extractValuesFromInfoBox(dataValues, ""))
                    infoBoxData.put("Devil Fruit", "false")
                } else if (heading.equalsIgnoreCase("Devil Fruit")) {
                    infoBoxData.putAll(extractValuesFromInfoBox(dataValues, "Devil Fruit "))
                    infoBoxData.put("Devil Fruit", "true")
                } else {
                    log.warn("Could not read info box: " + selection)
                }
            }
        }
        return infoBoxData
    }

    private static HashMap<String, String> extractValuesFromInfoBox(Elements dataValues, String textBeforeKey) {
        def infoBoxData = new HashMap<String, String>()
        for (element in dataValues) {
            def key = element.select("h1, h2, h3, h4, h5, h6").select('.pi-data-label').first().childNodes().first() as TextNode
            if (key.text().endsWith(':')) {
                def text = key.text()
                key.text(text.subSequence(0, text.size() - 1).toString())
            }
            def value = element.select("div.pi-data-value").first().text()
            infoBoxData.put(textBeforeKey + key.text(), value)
        }
        infoBoxData
    }

/**
 Get the name of all Gangs portrayed in Series and Manga
 * @throws IOException
 */
    public void getGangs() throws IOException {
        Document doc = Jsoup.connect(SITE_CRAWLER + "Category:Pirate_Crews").timeout(1000000).get();
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
        Document doc = Jsoup.connect(SITE_CRAWLER + "Devil_Fruit").timeout(1000000).get();
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
            def info = parseInfoBox(index.url);
            def hasDevilFruit = info.get("Devil Fruit")
            if (hasDevilFruit != null && hasDevilFruit.equalsIgnoreCase("true")) {
                index.devilFruit = DevilFruit.findByDefName(info.get("Devil Fruit Japanese Name"));
            }
            if (info.get("Occupations") != null && info.get("Affiliations") != null) {
                if (info.get("Occupations").contains("Pirate")) {
                    def pirate = new Pirate();
                    if (info.get("Bounty") != null) {
                        pirate.pirBounty = info.get("Bounty");
                    }
                    pirate.pirPosition = info.get("Occupations");
                    def gangsRaw = info.get("Affiliations");
                    def gangs = SEMICOLON_SPLITTER.split(gangsRaw)
                    if (gangs != null) {
                        for (it in gangs) {
                            def gang = Gang.findByGanName(it);
                            if (gang != null) {
                                gang.addToPirates(pirate);
                            }
                        }
                    }
                    pirate.figure = index;
                    pirate = pirate.save();
                    index.pirate = pirate;
                }
                if (info.get("Affiliations").contains("Marine")) {
                    def marine = new Marine()
                    marine.figure = index;
                    marine.marRank = info.get("Occupations");
                    marine = marine.save();
                    index.marine = marine;
                }
            }
            if (info.get("Age") != null) {
                index.figAge = info.get("Age");
            }
            if (info.get("Status") != null) {
                index.figStatus = info.get("Status");
            }
            if (info.get("Image") != null) {
                index.figPicture = info.get("Image");
            }
            if (info.get("Birthday") != null) {
                index.figBirthday = info.get("Birthday");
            }
            if (info.get("Japanese VA") != null) {
                index.figJapaneseVa = info.get("Japanese VA");
            }
            if (info.get("Romanized Name") != null) {
                index.figRomanizedName = info.get("Romanized Name");
            }
            if (info.get("Japanese Name") != null) {
                index.figJapaneseName = info.get("Japanese Name");
            }
            if (info.get("Debut") != null) {
                index.figDebut = info.get("Debut");
            }
            if (info.get("Residence") != null) {
                index.figResidence = info.get("Residence");
            }
            if (info.get("Epithet") != null) {
                index.figEpithet = info.get("Epithet");
            }
            if (info.get("Height") != null) {
                index.figHeight = info.get("Height");
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
        Document doc = Jsoup.connect(SITE_CRAWLER + "Category:Characters_by_Type").timeout(1000000).get();
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
        Document doc = Jsoup.connect(SITE_CRAWLER + "Category:" + race).timeout(1000000).get();
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
        Document doc = Jsoup.connect(SITE_CRAWLER + URL).timeout(1000000).get();
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
