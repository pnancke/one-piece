package one.piece.util

import one.piece.Figure
import one.piece.TimelineController


public class TravizUtils {

    static String generateAnimeTravizFor(String entity, Integer start, Integer end) {
        def episodes = new ArrayList<Integer>()
        def figures = Figure.getFigures(entity)
        for (Figure figure : figures) {
            if (figure != null) {
                episodes.addAll(figure.animeEpisodeAppearance.aneNumber)
            }
        }
        if (end > 0) {
            episodes.removeAll { it < start || it > end }
        }
        if (episodes.isEmpty()) {
            return null
        } else {
            return TimelineController.EPISODE_JOINER.join(episodes.unique { a, b -> a <=> b }.sort())
        }
    }

    static String generateMangaTravizFor(String entity, Integer start, Integer end) {
        def episodes = new ArrayList<Integer>()
        def figures = Figure.getFigures(entity)
        for (Figure figure : figures) {
            if (figure != null) {
                episodes.addAll(figure.mangaEpisodeAppearance.maeNumber)
            }
        }
        if (end > 0) {
            episodes.removeAll { it < start || it > end }
        }
        if (episodes.isEmpty()) {
            return null
        } else {
            return TimelineController.EPISODE_JOINER.join(episodes.unique { a, b -> a <=> b }.sort())
        }
    }
}
