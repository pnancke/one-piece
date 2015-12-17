package one.piece

import org.grails.web.json.JSONObject
import com.google.common.base.Joiner

class TimelineController {
    public static final Joiner EPISODE_JOINER = Joiner.on(" ").skipNulls()

    def index() {}

    def travizDataAnime(String figures) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def figureEpisodeMap = getFigureAnimeEpisodeMap(figureNamesList)
        def figureEpisodeJson = generateTravizString(figureEpisodeMap)
        render figureEpisodeJson.toString()
    }

    def travizDataManga(String figures) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def figureEpisodeMap = getFigureMangaEpisodeMap(figureNamesList)
        def figureEpisodeJson = generateTravizString(figureEpisodeMap)
        render figureEpisodeJson.toString()
    }

    private static ArrayList generateTravizString(LinkedHashMap figureEpisodeMap) {
        def result = new ArrayList()
        for (Map.Entry<String, String> entry : figureEpisodeMap.entrySet()) {
            if (entry.getKey().isEmpty() || entry.getValue().isEmpty()) {
                continue
            }
            def figEpisodeJsonObject = new JSONObject()
            figEpisodeJsonObject["edition"] = entry.getKey()
            def episodes = EPISODE_JOINER.join(entry.getValue())
            figEpisodeJsonObject["text"] = episodes
            result << figEpisodeJsonObject.toString()
        }
        return result
    }

    private getFigureAnimeEpisodeMap = { ArrayList rawFigureNames ->
        def figureEpisodeMap = [:]
        for (int i = 0; i < rawFigureNames.size(); i++) {
            def currFigure = Figure.findByFigName(rawFigureNames[i].toString())
            if (currFigure == null) {
                log.error("Could not find figure with name: " + rawFigureNames[i])
            } else {
                def appearance = currFigure.animeEpisodeAppearance
                if (appearance != null) {
                    figureEpisodeMap.put(currFigure.figName, appearance.aneNumber.sort())
                }
            }
        }
        return figureEpisodeMap
    }

    private getFigureMangaEpisodeMap = { ArrayList rawFigureNames ->
        def figureEpisodeMap = [:]
        for (int i = 0; i < rawFigureNames.size(); i++) {
            def currFigure = Figure.findByFigName(rawFigureNames[i].toString())
            if (currFigure == null) {
                log.error("Could not find figure with name: " + rawFigureNames[i])
            } else {
                def appearance = currFigure.mangaEpisodeAppearance
                if (appearance != null) {
                    figureEpisodeMap.put(currFigure.figName, appearance.maeNumber.sort())
                }
            }
        }
        return figureEpisodeMap
    }
}
