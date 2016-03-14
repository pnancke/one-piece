package one.piece.util

import one.piece.Figure
import one.piece.TimelineController
import org.grails.web.json.JSONObject


public class TravizUtils {

    static String generateAnimeTravizFor(String entity, Integer start, Integer end) {
        def episodes = new ArrayList<Integer>()
        def figEpisodeJsonObject = new JSONObject()

        def figures = Figure.getFigures(entity)
        for (Figure figure : figures) {
            episodes.addAll(figure.animeEpisodeAppearance.aneNumber)
        }
        if(end > 0){
            episodes.removeAll { it < start || it > end }
        }
        if (episodes.isEmpty()) {
            return null
        } else {
            figEpisodeJsonObject["edition"] = entity
            figEpisodeJsonObject["text"] = TimelineController.EPISODE_JOINER.join(episodes.unique { a, b -> a <=> b }.sort())
            return figEpisodeJsonObject.toString()
        }
    }

    static String generateMangaTravizFor(String entity, Integer start, Integer end) {
        def episodes = new ArrayList<Integer>()
        def figEpisodeJsonObject = new JSONObject()
        def figures = Figure.getFigures(entity)
        for (Figure figure : figures) {
            episodes.addAll(figure.mangaEpisodeAppearance.maeNumber)
        }
        if(end > 0){
            episodes.removeAll { it < start || it > end }
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
