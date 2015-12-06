package one.piece

import org.grails.web.json.JSONObject

class TimelineController {

    def index() {

    }

    def travizDataAnime(String figuresString) {
        def figureArray = figuresString.split(',')
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

    def travizDataManga(String figuresString) {
        def figureArray = figuresString.split(',')
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
        def figEpisodeJsonObject = new JSONObject()
        figEpisodeJsonObject["edition"] = currFigure.getFigName()
        def figEpisodeNumber = new StringBuilder()
        for (int j = 0; j < appearance.size(); j++) {
            figEpisodeNumber.append(appearance[j].getMaeNumber() + " ")
        }
        figEpisodeNumber.deleteCharAt(figEpisodeNumber.length() - 1)
        figEpisodeJsonObject["text"] = figEpisodeNumber.toString()
        figureEpisodeList << figEpisodeJsonObject.toString()
    }

    private static void createAnimeEpisodeString(Figure currFigure, Set<AnimeEpisode> appearance,
                                                 ArrayList figureEpisodeList) {
        def figEpisodeJsonObject = new JSONObject()
        figEpisodeJsonObject["edition"] = currFigure.getFigName()
        def figEpisodeNumber = new StringBuilder()
        for (int j = 0; j < appearance.size(); j++) {
            figEpisodeNumber.append(appearance[j].getAneNumber() + " ")
        }
        figEpisodeNumber.deleteCharAt(figEpisodeNumber.length() - 1)
        figEpisodeJsonObject["text"] = figEpisodeNumber.toString()
        figureEpisodeList << figEpisodeJsonObject.toString()
    }
}
