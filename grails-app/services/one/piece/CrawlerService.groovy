package one.piece

import grails.transaction.Transactional
import org.aspectj.apache.bcel.classfile.Unknown
import org.jsoup.HttpStatusException
import org.jsoup.Jsoup
import org.jsoup.nodes.Document


@Transactional
class CrawlerService {
    List<Figure> figures;

    /**
     * Process the URL and return the Info Box data.
     * @param URL
     * @return ArrayList with all infomation of page's Infobox
     * @throws IOException
     */
    public static ArrayList<String> returnInfoBox(String URL) throws IOException {
        def doc = Jsoup.connect(URL).get()
        def infoBoxData = new ArrayList<String>()

        // select documents by class "infobox", class of info boxes
        def iBox = doc.select("table.infobox").first();

        if (iBox != null) {
            System.out.println(iBox.data())
            def boxContent = iBox.select("tr")
            for (it in boxContent) {
                def charInfo = it.select("td")
                infoBoxData.add(charInfo.text())
            }

        }
        return infoBoxData
    }

    /**
     Get the name of all Gangs portrayed in Series and Manga
     * @throws IOException
     */
    public void getGangs() throws IOException {

        def doc = Jsoup.connect("http://onepiece.wikia.com/wiki/Category:Pirate_Crews").get();
        // Get the content inside the table Gangs.
        def gangs = doc.select("table[title=Pirate Crews Navibox]").first().select("table.collapsible")
                .select("td[style = text-align: left;]").select("a");

        for (index in gangs) {
            def gang = new Gang(ganName: index.text()).save()
        }
    }

    /**
     * get the name and type of all Devil Fruits who appear on Mangas or Episodes of One Piece
     * @throws IOException
     */
    public void getDevilFruit() throws IOException {

        def defFruitType;

        def doc = Jsoup.connect("http://onepiece.wikia.com/wiki/Devil_Fruit").get();
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
     * get all characters name
     */
    public void getCharactersName() {
        figures = new ArrayList<Figure>()
        addCanonCharacters()
        addNonCanonCharacters()
    }

    private void addCanonCharacters() {

        def doc = Jsoup.connect("http://onepiece.wikia.com/wiki/List_of_Canon_Characters").get();
        def lineInformation = doc.select("table.wikitable").first().select("tr");

        for (index in lineInformation) {
            def a = index.select("td")
            if (index.select("td") != null && a.size() > 0) {
                figures.add(new Figure(figName: index.select("td").get(1).select("a").text(), figGender: "Male").save())
            }
        }
    }

    private void addNonCanonCharacters() {

        def doc = Jsoup.connect("http://onepiece.wikia.com/wiki/List_of_Non_Canon_Characters").get();
        def lineInformation = doc.select("table.wikitable").first().select("tr");

        for (index in lineInformation) {
            def a = index.select("td")
            if (index.select("td") != null && a.size() > 0) {
                figures.add(new Figure(figName: index.select("td").get(1).select("a").text(), figGender: "Male").save())
            }
        }
    }

    /**
     * saves in the database the episode's name and the characters of these episode.
     * @param URL
     * @param epNumber
     */
    public boolean getCharactersEpisode(String URL, int epNumber) {
        try {
            def doc = Jsoup.connect(URL).timeout(1000000).get()
            def episode = new AnimeEpisode(aneName: doc.select("th").first().text(), aneNumber: epNumber).save()

            def charName;
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
        // catch if the web page doesn't exist, meaning that we already have the last episode
        catch (HttpStatusException e) {
            return false
        }
    }

/**
 * saves in the database the chapter's name and the characters on manga's chapter.
 * @param URL
 */
    public boolean getCharactersManga(String URL, int chNumber) throws IOException {
        try {
            def doc = Jsoup.connect(URL).timeout(1000000).get();

            def chapter = new MangaEpisode(maeName: doc.select("th").first().text(), maeNumber: chNumber).save()

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
        // catch if the web page doesn't exist, meaning that we already have the last chapter
        catch (HttpStatusException e) {
            return false
        }
    }
    
    def serviceMethod() {
        getCharactersName();
        def r = true
        def i = 1
        long start = System.nanoTime();
        System.out.println(start)
        while (r == true) {
            r = getCharactersEpisode("http://onepiece.wikia.com/wiki/Episode_" + i.toString(), i)
            i++
        }
        r = true
        i = 1
        while (r == true) {
            r = getCharactersManga("http://onepiece.wikia.com/wiki/Chapter_" + i.toString(), i)
            i++
        }
        long end = System.nanoTime();
        System.out.println((end - start).toString())
    }

}
