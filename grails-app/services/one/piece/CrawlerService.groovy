package one.piece

import grails.transaction.Transactional
import org.jsoup.Jsoup


@Transactional
class CrawlerService {



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
        // Get the content inside the table Devil Fruit, witch is the type and
        // name of fruits, separated by type.
        def gangs = doc.select("table[title=Pirate Crews Navibox]").first().select("table.collapsible")
                .select("td[style = text-align: left;]").select("a");

        for (index in gangs) {
            new Gang(ganName: index.text()).save()
        }
    }

    /**
     * get the name of all characters who are on the Manga Chapter
     * @param URL url of Chapter
     * @throws IOException
     */
    public void getCharactersManga(String URL) throws IOException {
        def doc = Jsoup.connect(URL).get();

        def characters = doc.select("table.CharTable").select("li").select("a");

        for (element in characters) {
            System.out.println(element.text());
        }

    }

    /**
     * get the name from a Episode or Chapter of a link
     * @throws IOException
     */
    public void getEpisodeChapterName(String URL) throws IOException {
        def doc = Jsoup.connect(URL).get();

        System.out.println(doc.select("th").first().text());
    }


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


    def serviceMethod() {
        getDevilFruit()
        getGangs()
    }
}
