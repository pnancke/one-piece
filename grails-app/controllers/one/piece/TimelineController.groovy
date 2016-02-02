package one.piece

import com.google.common.base.Strings
import one.piece.util.HttpUtils
import one.piece.util.TravizUtils
import com.google.common.base.Joiner

class TimelineController {
    public static final Joiner EPISODE_JOINER = Joiner.on(" ").skipNulls()

    def index() {}

    def travizDataAnime(String figures) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def result = []
        for (String figureName : figureNamesList) {
            def s = TravizUtils.generateAnimeTravizFor(figureName)
            if (!Strings.isNullOrEmpty(s)) {
                result.add(s)
            }
        }
        render result.toString()
    }

    def travizDataManga(String figures) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def result = []
        for (String figureName : figureNamesList) {
            def s = TravizUtils.generateMangaTravizFor(figureName)
            if (!Strings.isNullOrEmpty(s)) {
                result.add(s)
            }
        }
        render result.toString()
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

                resultCount = 1;

            }
        }/* else if (term.endsWith(' (Attribute)')) {
            def attribute = term.minus(' (Attribute)')
            def criteria = Figure.createCriteria()
            Closure query = Figure.createWhereQuery(attribute)
            def figures = criteria.list(query)
            if (figures == null || figures.isEmpty()) {
                successResponse = false
            } else {
                data.put("Attribute", figures)
                resultCount = figures.size()
            }
        } */ else {
            successResponse = false
        }

        data.put("SearchTerm", term)

        def response = HttpUtils.buildJsonResponse(successResponse, data, resultCount).toString()
        render response
    }
}
