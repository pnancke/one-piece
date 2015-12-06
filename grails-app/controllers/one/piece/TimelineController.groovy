package one.piece

import org.grails.web.json.JSONObject

class TimelineController {

    def index() {

    }

    def travizDataAnime(String figures) {
        def figureArray = figures.split(',')
        def figureEpisodeList = []
        for (int i = 0; i < figureArray.size(); i++) {
            def currFigure = Figure.findByFigName(figureArray[i])
            if (currFigure == null) {
                log.error("Could not find figure with name: " + figureArray[i])
            } else {
                def appearance = currFigure.animeEpisodeAppearance
                if (appearance != null) {
                    createAnimeEpisodeString(currFigure, appearance, figureEpisodeList)
                }
            }
        }
        log.info("travizDataAnime response: " + figureEpisodeList.toString())
        render figureEpisodeList.toString()
    }

    def travizDataManga(String figures) {
        def figureArray = figures.split(',')
        def figureEpisodeList = []
        for (int i = 0; i < figureArray.size(); i++) {
            def currFigure = Figure.findByFigName(figureArray[i])
            if (currFigure == null) {
                log.error("Could not find figure with name: " + figureArray[i])
            } else {
                def appearance = currFigure.mangaEpisodeAppearance
                if (appearance != null) {
                    createMangaEpisodeString(currFigure, appearance, figureEpisodeList)
                }
            }
        }
        log.info("travizDataManga response: " + figureEpisodeList.toString())
        render figureEpisodeList.toString()
    }

    private static void createMangaEpisodeString(Figure currFigure, Set<MangaEpisode> appearance,
                                                 ArrayList figureEpisodeList) {
        def sortedAppearance = appearance.toSorted { a, b -> a.maeNumber <=> b.maeNumber }
        def figEpisodeJsonObject = new JSONObject()
        figEpisodeJsonObject["edition"] = currFigure.getFigName()
        def figEpisodeNumber = new StringBuilder()
        for (int j = 0; j < sortedAppearance.size(); j++) {
            figEpisodeNumber.append(sortedAppearance[j].getMaeNumber() + " ")
        }
        figEpisodeNumber.deleteCharAt(figEpisodeNumber.length() - 1)
        figEpisodeJsonObject["text"] = figEpisodeNumber.toString()
        figureEpisodeList << figEpisodeJsonObject.toString()
    }

    private static void createAnimeEpisodeString(Figure currFigure, Set<AnimeEpisode> appearance,
                                                 ArrayList figureEpisodeList) {
        def sortedAppearance = appearance.toSorted { a, b -> a.aneNumber <=> b.aneNumber }
        def figEpisodeJsonObject = new JSONObject()
        figEpisodeJsonObject["edition"] = currFigure.getFigName()
        def figEpisodeNumber = new StringBuilder()
        for (int j = 0; j < sortedAppearance.size(); j++) {
            figEpisodeNumber.append(sortedAppearance[j].getAneNumber() + " ")
        }
        figEpisodeNumber.deleteCharAt(figEpisodeNumber.length() - 1)
        figEpisodeJsonObject["text"] = figEpisodeNumber.toString()
        figureEpisodeList << figEpisodeJsonObject.toString()
    }
}
