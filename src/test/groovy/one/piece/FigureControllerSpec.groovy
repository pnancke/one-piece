package one.piece

import grails.test.mixin.TestFor
import grails.test.mixin.Mock
import org.junit.Before
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(FigureController)
@Mock([Figure, Marine, Pirate, Gang])
class FigureControllerSpec extends Specification {
    public static final String FIG_1_NAME = "Fig1-093605"
    public static final String FIG_1_NAME_LOWERCASE = "fig1-093605"
    public static final String FIG_1_NAME_SHORT = "Fig1"
    public static final String FIG_1_NAME_SHORT_LOWERCASE = "fig1"
    public static final String FIG_2_NAME = "Fig2-093608"
    public static final String FIG_NAME_SHORT = "fig"
    public static final String FIG_NAME_NOT_EXISTS = "Fig3-093945"
    public static final String FOO = "foo"
    public static final String MARINE = "Marine"
    public static final String MARINE_LOWERCASE = "marine"
    public static final String PIRATE = "Pirate"
    public static final String PIRATE_LOWERCASE = "pirate"
    public static final String GANG = "Gang"
    public static final String GANG_1_NAME = "Gang1-105109"
    public static final String GANG_1_NAME_SHORT = "Gang1"
    public static final String GANG_LOWERCASE = "gang"


    def setup() {
    }

    def cleanup() {
    }

    @Before
    def dropFigures() {
        Figure.findAll().each { it.delete() }
    }

    void "test autocompletion with no match"() {
        when:
        controller.autocomplete(FIG_NAME_NOT_EXISTS)

        then:
        response.text == "[]"
    }

    void "test autocompletion with one match"() {
        new Figure(figName: FIG_1_NAME, figGender: "Male").save(failOnError: true)

        when:
        controller.autocomplete(FIG_1_NAME_SHORT)

        then:
        response.text == "[\"" + FIG_1_NAME + "\"]"
    }

    void "test autocompletion ignores case"() {
        new Figure(figName: FIG_1_NAME, figGender: "Male").save(failOnError: true)

        when:
        controller.autocomplete(FIG_1_NAME_SHORT_LOWERCASE)

        then:
        response.text == "[\"" + FIG_1_NAME + "\"]"
    }

    void "test autocompletion with two matches"() {
        new Figure(figName: FIG_1_NAME, figGender: "Male").save(failOnError: true)
        new Figure(figName: FIG_2_NAME, figGender: "Female").save(failOnError: true)

        when:
        controller.autocomplete(FIG_NAME_SHORT)

        then:
        response.text == "[\"" + FIG_1_NAME + "\",\"" + FIG_2_NAME + "\"]"
    }

    void "test autocompletion maximum 10 suggestions"() {
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Figure(figName: FOO, figGender: "Female").save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)
        new Gang(ganName: FOO).save(failOnError: true)

        when:
        controller.autocomplete(FOO)

        then:
        response.getJson().size() == 10
    }

    void "test autocomplete contains marine"() {
        when:
        controller.autocomplete(MARINE)

        then:
        response.text == "[\"" + MARINE + "\"]"
    }

    void "test autocomplete contains marine ignores case"() {
        when:
        controller.autocomplete(MARINE_LOWERCASE)

        then:
        response.text == "[\"" + MARINE + "\"]"
    }

    void "test autocomplete contains pirate"() {
        when:
        controller.autocomplete(PIRATE)

        then:
        response.text == "[\"" + PIRATE + "\"]"
    }

    void "test autocomplete contains pirate ignores case"() {
        when:
        controller.autocomplete(PIRATE_LOWERCASE)

        then:
        response.text == "[\"" + PIRATE + "\"]"
    }

    void "test autocomplete includes gangs"() {
        new Gang(ganName: GANG_1_NAME).save(failOnError: true)

        when:
        controller.autocomplete(GANG_1_NAME_SHORT)

        then:
        response.text == "[\"" + GANG_1_NAME + "\"]"
    }

    void "test search figure exists"() {
        new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)

        when:
        controller.search(FIG_1_NAME)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }

    void "test search ignores case"() {
        new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)

        when:
        controller.search(FIG_1_NAME_LOWERCASE)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }

    void "test search empty response when not found"() {
        when:
        controller.search(FOO)

        then:
        response.text == '{"success":false,"count":0,"data":[]}'
    }

    void "test search marine"() {
        def figure = new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)
        new Marine(figure: figure).save(failOnError: true)

        when:
        controller.search(MARINE)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }

    void "test search marine ignores case"() {
        def figure = new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)
        new Marine(figure: figure).save(failOnError: true)

        when:
        controller.search(MARINE_LOWERCASE)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }

    void "test search pirate"() {
        def figure = new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)
        new Pirate(figure: figure).save(failOnError: true)

        when:
        controller.search(PIRATE)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }

    void "test search pirate ignores case"() {
        def figure = new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)
        new Pirate(figure: figure).save(failOnError: true)

        when:
        controller.search(PIRATE_LOWERCASE)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }

    void "test search gang"() {
        def figure = new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)
        def gang = new Gang(ganName: GANG).save(failOnError: true)
        new Pirate(figure: figure).addToGangs(gang).save(failOnError: true)

        when:
        controller.search(GANG)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }

    void "test search gang ignores case"() {
        def figure = new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)
        def gang = new Gang(ganName: GANG).save(failOnError: true)
        new Pirate(figure: figure).addToGangs(gang).save(failOnError: true)

        when:
        controller.search(GANG_LOWERCASE)

        then:
        response.text == '{"success":true,"count":1,"data":["' + FIG_1_NAME + '"]}'
    }
}
