package one.piece

import grails.transaction.Transactional
import org.jsoup.Jsoup


@Transactional
class CrawlerService {



    /**
     * Process the URL and print the Info Box data.
     * @param URL
     * @throws IOException
     */
    public static void returnInfoBox(String URL) throws IOException {

        def doc = Jsoup.connect(URL).get();

        // select documents by class "infobox", class of info boxes
        def iBox = doc.select("table.infobox").first();

        if (iBox != null) {
            System.out.println(iBox.data())
            def boxContent = iBox.select("tr")

            for (it in boxContent) {
                def charInfo = it.select("td")
                // here I'll put a method with the information that we need, probably as second parameter.
            }

        }
    }

    def serviceMethod() {
        processPage("http://onepiece.wikia.com/wiki/Monkey_D._Luffy");
    }
}
