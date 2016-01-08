package one.piece

import groovy.json.JsonBuilder
import one.piece.util.HttpUtils
import org.apache.commons.lang.StringUtils

class FigureController {

    def scaffold = Figure

    def index() {}

    def autocomplete(String term) {
        def names = []
        List<GString> figNames = Figure.getFigureNames(term)
        List<GString> groupNames = Figure.getGangNames(term)
        names.addAll(figNames)
        names.addAll(groupNames)

        if (StringUtils.containsIgnoreCase("marine", term)) {
            names.add("Marine (Group)")
        }
        if (StringUtils.containsIgnoreCase("pirate", term)) {
            names.add("Pirate (Group)")
        }

        names.sort()
        def resultNamesSplitted = names.collate(9)[0]
        if (!(term.endsWith(' (Attribute)') || term.endsWith('(Figure)') || term.endsWith('(Group)'))) {
            resultNamesSplitted.add(term + " (Attribute)")
        }
        log.info('autocomplete: ' + resultNamesSplitted)
        def resultJson = new JsonBuilder(resultNamesSplitted).toString()
        render resultJson
    }

    def search(String term) {
        def successResponse = true
        log.info("search for: " + term)
        def results = [];
        if (term == null) {
            successResponse = false
        } else if (term.contains(' (Group)')) {
            def entity = term.minus(' (Group)')
            results = Figure.getGroup(entity)
        } else if (term.contains(' (Figure)')) {
            def entity = term.minus(' (Figure)')
            def figure = Figure.findByFigNameIlike(entity)
            if (figure == null) {
                successResponse = false
            } else {
                results[0] = figure.figName + ' (Figure)'
            }
        } else if (term.endsWith(' (Attribute)')) {
            def attribute = term.minus(' (Attribute)')
            def criteria = Figure.createCriteria()
            Closure query = Figure.createWhereQuery(attribute)
            def figures = criteria.list(query)
            if (figures == null || figures.isEmpty()) {
                successResponse = false
            } else {
                results.add(figures)
            }
        } else {
            successResponse = false
        }

        log.info("results: " + results)
        def responseData
        if (!successResponse) {
            responseData = ""
        } else {
            responseData = term
        }

        def response = HttpUtils.buildJsonResponse(successResponse, responseData).toString()
        log.info("response: " + response)
        render response
    }
}
