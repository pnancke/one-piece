package one.piece

import groovy.json.JsonBuilder
import org.apache.commons.lang.StringUtils

class FigureController {

    //def scaffold = Figure

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
        def resultNamesSplitted = names.collate(10)[0]
        log.info('autocomplete: ' + resultNamesSplitted)
        def resultJson = new JsonBuilder(resultNamesSplitted).toString()
        render resultJson
    }
}
