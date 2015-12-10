package one.piece

import groovy.json.JsonBuilder

class FigureController {

    def scaffold = Figure

    def index() {}

    def autocomplete(String term) {
        def figures = Figure.findAllByFigNameIlike('%' + term + '%', [max: 10, sort: "figName"])
        def resultFigureNames = []
        for (int i = 0; i < figures.size(); i++) {
            resultFigureNames << figures[i].figName
        }

        log.info('found figures: ' + resultFigureNames)
        def resultJson = new JsonBuilder(resultFigureNames).toString()
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
                def figure = Figure.findByFigNameIlike(figureName)
                if (figure == null) {
                    successResponse = false
                } else {
                    results[0] = figure.figName
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
        render json
    }

}
