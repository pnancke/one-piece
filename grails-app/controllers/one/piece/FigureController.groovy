package one.piece

import groovy.json.JsonBuilder
import org.apache.commons.lang.StringUtils

class FigureController {

    def scaffold = Figure

    def index() {}

    def autocomplete(String term) {
        def names = []
        def figures = Figure.findAllByFigNameIlike('%' + term + '%', [max: 10, sort: "figName"])
        def gangs = Gang.findAllByGanNameIlike('%' + term + '%', [max: 10, sort: "ganName"])

        names.addAll(figures.figName)
        names.addAll(gangs.ganName)

        if (StringUtils.containsIgnoreCase("marine", term)) {
            names.add("Marine")
        }
        if (StringUtils.containsIgnoreCase("pirate", term)) {
            names.add("Pirate")
        }

        names.sort()
        def resultNamesSplitted = names.collate(10)[0]
        log.info('found figures: ' + resultNamesSplitted)
        def resultJson = new JsonBuilder(resultNamesSplitted).toString()
        render resultJson
    }

    def search(String figureName) {
        def successResponse = true
        log.info("search for: " + figureName)
        def results = [];
        if (figureName != null) {
            if ("marine".equalsIgnoreCase(figureName)) {
                results = Marine.list().figure.figName
            } else if ("pirate".equalsIgnoreCase(figureName)) {
                results = Pirate.list().figure.figName
            } else {
                def gang = Gang.findByGanNameIlike(figureName)
                if (gang != null) {
                    results = gang.pirates.figure.figName
                } else {
                    def figure = Figure.findByFigNameIlike(figureName)
                    if (figure == null) {
                        successResponse = false
                    } else {
                        results[0] = figure.figName
                    }
                }
            }
        } else {
            successResponse = false
        }

        log.info("results: " + results)
        def json = new JsonBuilder()
        json {
            success(successResponse)
            count(results.size())
            data(results)
        }
        log.info("response json" + json)
        render json.toString()
    }

}
