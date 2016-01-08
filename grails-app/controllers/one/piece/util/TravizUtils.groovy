package one.piece.util

import one.piece.Figure
import one.piece.TimelineController
import org.grails.web.json.JSONObject


public class TravizUtils {

    static String generateAnimeTravizFor(String entity) {
        def episodes = new ArrayList<Integer>()
        def figEpisodeJsonObject = new JSONObject()

        def figures = Figure.getFigures(entity)
        for (Figure figure : figures) {
            episodes.addAll(figure.animeEpisodeAppearance.aneNumber)
        }
        if (episodes.isEmpty()) {
            return null
        } else {
            figEpisodeJsonObject["edition"] = entity
            figEpisodeJsonObject["text"] = TimelineController.EPISODE_JOINER.join(episodes.unique { a, b -> a <=> b }.sort())
            return figEpisodeJsonObject.toString()
        }
    }

    static String generateMangaTravizFor(String entity) {
        def episodes = new ArrayList<Integer>()
        def figEpisodeJsonObject = new JSONObject()
        def figures = Figure.getFigures(entity)
        for (Figure figure : figures) {
            episodes.addAll(figure.mangaEpisodeAppearance.maeNumber)
        }
        if (episodes.isEmpty()) {
            return null
        } else {
            figEpisodeJsonObject["edition"] = entity
            figEpisodeJsonObject["text"] = TimelineController.EPISODE_JOINER.join(episodes.unique { a, b -> a <=> b }.sort())
            return figEpisodeJsonObject.toString()
        }
    }
}
