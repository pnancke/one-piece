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
        response.setContentType("application/json")
        render resultJson
    }

    def search(String figureName) {
        log.info("search: " + figureName)
        if (figureName != null) {
            def figure = Figure.findByFigNameIlike(figureName)
            if (figure == null) {
                render ""
            } else {
                render figure.figName
            }
        } else {
            render ""
        }

    }
}
