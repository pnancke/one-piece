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
    public static final String FIG_1 = "Fig1-093605"
    public static final String FIG_1_SHORT = "Fig1"
    public static final String FIG_1_SHORT_CASE = "fig1"
    public static final String FIG_2 = "Fig2-093608"
    public static final String FIG_1_2_SHORT = "fig"
    public static final String FIG_NOT_EXISTS = "Fig3-093945"
    public static final String FOO = "foo"


    def setup() {
        new Figure(figName: FIG_1, figGender: "Male").save(failOnError: true)
        new Figure(figName: FIG_2, figGender: "Female").save(failOnError: true)
    }

    def cleanup() {
    }

    void "test autocompletion with no match"() {
        when:
        controller.autocomplete(FIG_NOT_EXISTS)

        then:
        response.text == "[]"
    }

    void "test autocompletion with one match"() {
        when:
        controller.autocomplete(FIG_1_SHORT)

        then:
        response.text == "[\"" + FIG_1 + "\"]"
    }

    void "test autocompletion ignores case"() {
        when:
        controller.autocomplete(FIG_1_SHORT_CASE)

        then:
        response.text == "[\"" + FIG_1 + "\"]"
    }

    void "test autocompletion with two matches"() {
        when:
        controller.autocomplete(FIG_1_2_SHORT)

        then:
        response.text == "[\"" + FIG_1 + "\",\"" + FIG_2 + "\"]"
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
}
