package one.piece

import grails.test.mixin.TestFor
import grails.test.mixin.Mock
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(FigureController)
@Mock(Figure)
class FigureControllerSpec extends Specification {
    public static final String FIG_1_NAME = "Fig1-093605"
    public static final String FIG_1_NAME_LOWERCASE = "fig1-093605"
    public static final String FIG_1_NAME_SHORT = "Fig1"
    public static final String FIG_1_NAME_SHORT_LOWERCASE = "fig1"
    public static final String FIG_2_NAME = "Fig2-093608"
    public static final String FIG_NAME_SHORT = "fig"
    public static final String FIG_NAME_NOT_EXISTS = "Fig3-093945"
    public static final String FOO = "foo"


    def setup() {
        new Figure(figName: FIG_1_NAME, figGender: "Male").save(failOnError: true)
        new Figure(figName: FIG_2_NAME, figGender: "Female").save(failOnError: true)
    }

    def cleanup() {
    }

    void "test autocompletion with no match"() {
        when:
        controller.autocomplete(FIG_NAME_NOT_EXISTS)

        then:
        response.text == "[]"
    }

    void "test autocompletion with one match"() {
        when:
        controller.autocomplete(FIG_1_NAME_SHORT)

        then:
        response.text == "[\"" + FIG_1_NAME + "\"]"
    }

    void "test autocompletion ignores case"() {
        when:
        controller.autocomplete(FIG_1_NAME_SHORT_LOWERCASE)

        then:
        response.text == "[\"" + FIG_1_NAME + "\"]"
    }

    void "test autocompletion with two matches"() {
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

        when:
        controller.autocomplete(FOO)

        then:
        response.getJson().size() == 10
    }

    void "test search figure exists"() {
        new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)

        when:
        controller.search(FIG_1_NAME)

        then:
        response.text == FIG_1_NAME
    }

    void "test search ignores case"() {
        new Figure(figName: FIG_1_NAME, figGender: "Female").save(failOnError: true)

        when:
        controller.search(FIG_1_NAME_LOWERCASE)

        then:
        response.text == FIG_1_NAME
    }

    void "test search empty response when not found"() {
        when:
        controller.search(FOO)

        then:
        response.text == ""
    }
}
