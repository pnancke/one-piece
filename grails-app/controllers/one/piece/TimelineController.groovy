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
                    for (int j = 0; j < appearance.size(); j++) {
                        def figEpisodeJsonObject = new JSONObject()
                        figEpisodeJsonObject["edition"] = currFigure.getFigName()
                        figEpisodeJsonObject["text"] = appearance[j].getAneNumber()
                        figureEpisodeList << figEpisodeJsonObject.toString()
                    }
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
                    for (int j = 0; j < appearance.size(); j++) {
                        def figEpisodeJsonObject = new JSONObject()
                        figEpisodeJsonObject["edition"] = currFigure.getFigName()
                        figEpisodeJsonObject["text"] = appearance[j].getMaeNumber()
                        figureEpisodeList << figEpisodeJsonObject.toString()
                    }
                }
            }
        }
        log.info("travizDataManga response: " + figureEpisodeList.toString())
        render figureEpisodeList.toString()
    }
}
