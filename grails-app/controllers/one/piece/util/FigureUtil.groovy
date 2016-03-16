package one.piece.util

import com.google.common.collect.Sets
import one.piece.AnimeEpisode
import one.piece.Figure
import one.piece.MangaEpisode

public class FigureUtil {
    static Map getSimilarFiguresAnime(ArrayList<String> entityNames, int max) {
        def episodePool = new HashSet()
        def figurePool = new ArrayList()
        for (entityName in entityNames) {
            if (entityName.endsWith(' (Group)')) {
                def group = entityName.minus(' (Group)')
                def figures = Figure.getFiguresFromGroup(group)
                def currEpisodes = new HashSet<AnimeEpisode>()
                for (figure in figures) {
                    currEpisodes.addAll(figure.getAnimeEpisodeAppearance())
                }
                episodePool.addAll(currEpisodes.aneNumber)
            } else if (entityName.endsWith(' (Figure)')) {
                def figureName = entityName.minus(' (Figure)')
                def currFigure = Figure.findByFigName(figureName)
                if (currFigure != null) {
                    figurePool.add(currFigure)
                    def currEpisodes = currFigure.getAnimeEpisodeAppearance()
                    episodePool.addAll(currEpisodes.aneNumber)
                }
            }
        }
        def allFigures = Figure.all
        allFigures.removeAll(figurePool)
        def similarities = new HashMap()
        for (figure in allFigures) {
            def animeAppearance = figure.animeEpisodeAppearance
            if (animeAppearance != null) {
                def episodeNumbers = animeAppearance.aneNumber
                if (episodeNumbers != null) {
                    def currEpisodes = new HashSet<>(episodeNumbers)
                    BigDecimal similarity = calculateSimilarity(episodePool, currEpisodes)
                    similarities.put(figure.figName, similarity)
                }
            }
        }
        return similarities.findAll { it.value > 0 }.sort { -it.value }.take(max)
    }

    static Map getSimilarFiguresManga(ArrayList<String> entityNames, int max) {
        def episodePool = new HashSet()
        def figurePool = new ArrayList()
        for (entityName in entityNames) {
            if (entityName.endsWith(' (Group)')) {
                def group = entityName.minus(' (Group)')
                def figures = Figure.getFiguresFromGroup(group)
                def currEpisodes = new HashSet<MangaEpisode>()
                for (figure in figures) {
                    currEpisodes.addAll(figure.getMangaEpisodeAppearance())
                }
                episodePool.addAll(currEpisodes.maeNumber)
            } else if (entityName.endsWith(' (Figure)')) {
                def figureName = entityName.minus(' (Figure)')
                def currFigure = Figure.findByFigName(figureName)
                if (currFigure != null) {
                    figurePool.add(currFigure)
                    def currEpisodes = currFigure.getMangaEpisodeAppearance()
                    episodePool.addAll(currEpisodes.maeNumber)
                }
            }
        }
        def allFigures = Figure.all
        allFigures.removeAll(figurePool)
        def similarities = new HashMap()
        for (figure in allFigures) {
            def mangaAppearance = figure.mangaEpisodeAppearance
            if (mangaAppearance != null) {
                def episodeNumbers = mangaAppearance.maeNumber
                if (episodeNumbers != null) {
                    def currEpisodes = new HashSet<>(figure.mangaEpisodeAppearance.maeNumber)
                    BigDecimal similarity = calculateSimilarity(episodePool, currEpisodes)
                    similarities.put(figure.figName, similarity)
                }
            }
        }
        return similarities.findAll { it.value > 0 }.sort { -it.value }.take(max)
    }

    private static BigDecimal calculateSimilarity(HashSet episodePool, HashSet currEpisodes) {
        def intersection = Sets.intersection(episodePool, currEpisodes)
        def union = Sets.union(episodePool, currEpisodes)
        if (union.size() > 0) {
            def similarity = intersection.size() / union.size()
            similarity
        } else {
            return 0
        }
    }
}
