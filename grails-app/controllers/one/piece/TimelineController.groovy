package one.piece

import com.google.common.base.Joiner
import com.google.common.base.Strings
import one.piece.util.FigureUtil
import one.piece.util.HttpUtils
import one.piece.util.TravizUtils
import org.grails.web.json.JSONObject

class TimelineController {
    public static final Joiner EPISODE_JOINER = Joiner.on(" ").skipNulls()

    def index() {}

    def travizDataAnime(String figures, Integer start, Integer end) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def result = []
        for (String figureName : figureNamesList) {
            def figEpisodeJsonObject = new JSONObject()
            figEpisodeJsonObject["edition"] = figureName
            def travizEpisodes = TravizUtils.generateAnimeTravizFor(figureName, start, end)
            figEpisodeJsonObject["text"] = travizEpisodes
            if (!Strings.isNullOrEmpty(travizEpisodes)) {
                figEpisodeJsonObject["text"] = travizEpisodes
                result.add(figEpisodeJsonObject)
            }
        }

        def similarFigures = FigureUtil.getSimilarFiguresAnime(figureNamesList, 5)
        def data = [:]
        data.put("traviz", result)
        data.put("similar", similarFigures)
        def response = HttpUtils.buildJsonResponse(result.size() > 0, data, result.size()).toString()
        render response
    }

    def travizDataManga(String figures, Integer start, Integer end) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def result = []
        for (String figureName : figureNamesList) {
            def figEpisodeJsonObject = new JSONObject()
            figEpisodeJsonObject["edition"] = figureName
            def travizEpisodes = TravizUtils.generateMangaTravizFor(figureName, start, end)
            figEpisodeJsonObject["text"] = travizEpisodes
            if (!Strings.isNullOrEmpty(travizEpisodes)) {
                figEpisodeJsonObject["text"] = travizEpisodes
                result.add(figEpisodeJsonObject)
            }
        }

        def similarFigures = FigureUtil.getSimilarFiguresManga(figureNamesList, 5)
        def data = [:]
        data.put("traviz", result)
        data.put("similar", similarFigures)
        def response = HttpUtils.buildJsonResponse(result.size() > 0, data, result.size()).toString()
        render response
    }

    def getFigureInformation(String term) {
        def data = [:]
        def resultCount = 0

        def successResponse = true
        log.info("get figure information for: " + term)

        if (term == null) {
            successResponse = false
        } else if (term.contains(' (Group)')) {
            def entities = Figure.getGroup(term.minus(' (Group)'))
            if (entities != null) {
                data.put("Members", entities.join(', '))
                resultCount = entities.size()
            } else {
                resultCount = 0
                successResponse = false
            }
        } else if (term.contains(' (Figure)')) {
            def entity = term.minus(' (Figure)')
            def figure = Figure.findByFigNameIlike(entity)
            if (figure == null) {
                successResponse = false
                resultCount = 0
            } else {
                if (figure.figPicture != null)
                    data.put("Picture", figure.figPicture)
                if (figure.figName != null)
                    data.put("Name", figure.figName)
                if (figure.figRace != null)
                    data.put("Race", figure.figRace)
                if (figure.figAge != null)
                    data.put("Age", figure.figAge)
                if (figure.figBirthday != null)
                    data.put("Birthday", figure.figBirthday)
                if (figure.figStatus != null)
                    data.put("Status", figure.figStatus)
                if (figure.figOrigin != null)
                    data.put("Origin", figure.figOrigin)
                if (figure.figMarine != null) {
                    Marine mari = figure.figMarine
                    data.put("Occupations", mari.marRank)
                }
                if (figure.figPirate != null) {
                    Pirate pir = figure.figPirate
                    data.put("Position", pir.pirPosition)
                    data.put("Bounty", pir.pirBounty)
                }
                if (figure.devilFruit != null) {
                    DevilFruit devf = figure.devilFruit
                    data.put("Devilfruit", devf.defName)
                }
                if (figure.figDebut != null)
                    data.put("Debut", figure.figDebut)
                if (figure.figResidence != null)
                    data.put("Residence", figure.figResidence)

                resultCount = 1;

            }
        } else {
            successResponse = false
        }

        data.put("SearchTerm", term)

        def response = HttpUtils.buildJsonResponse(successResponse, data, resultCount).toString()
        render response
    }
}
