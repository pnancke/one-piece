package one.piece

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(TimelineController)
@Mock([Figure, Marine, Pirate, Gang, AnimeEpisode, MangaEpisode])
class TimelineControllerSpec extends Specification {
    public static final String FIGURE_1_NAME = "Figure1"
    public static final String FIGURE_2_NAME = "Figure2"
    public static final int ANIME_1_NUMBER = 1
    public static final int ANIME_2_NUMBER = 2
    public static final int MANGA_1_NUMBER = 1
    public static final int MANGA_2_NUMBER = 2
	
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
	public static final String GANG_1_NAME = "Gang1-105109"
	public static final String GANG_1_NAME_LOWERCASE = "gang1-105109"

    def setup() {
    }

    def cleanup() {
    }

    void "test traviz anime with one figure results empty array"() {
        new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME)

        then:
        response.getText() == "[]"
    }

    void "test traviz anime with one episode and one figure"() {
        def animeEpisode = new AnimeEpisode(aneNumber: 1).save(failOnError: true)
        def figure = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        animeEpisode.addToFigures(figure).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME + " (Figure)")

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + " (Figure)\",\"text\":\"" + ANIME_1_NUMBER + "\"}]"
    }

    void "test traviz anime with two figures"() {
        def animeEpisode = new AnimeEpisode(aneNumber: 1).save(failOnError: true)
        def figure1 = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        def figure2 = new Figure(figName: FIGURE_2_NAME, figGender: "Male").save(failOnError: true)
        animeEpisode.addToFigures(figure1).save(failOnError: true)
        animeEpisode.addToFigures(figure2).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME + ' (Figure),' + FIGURE_2_NAME + ' (Figure)')

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + " (Figure)\",\"text\":\"" + ANIME_1_NUMBER + "\"}, " +
                "{\"edition\":\"" + FIGURE_2_NAME + " (Figure)\",\"text\":\"" + ANIME_1_NUMBER + "\"}]"
    }

    void "test traviz anime with two episodes"() {
        def animeEpisode1 = new AnimeEpisode(aneNumber: ANIME_1_NUMBER).save(failOnError: true)
        def animeEpisode2 = new AnimeEpisode(aneNumber: ANIME_2_NUMBER).save(failOnError: true)
        def figure = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        animeEpisode1.addToFigures(figure).save(failOnError: true)
        animeEpisode2.addToFigures(figure).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME + " (Figure)")

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + " (Figure)\",\"text\":\"" + ANIME_1_NUMBER + " " + ANIME_2_NUMBER + "\"}]"
    }

    void "test traviz manga with one figure results empty array"() {
        new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)

        when:
        controller.travizDataManga(FIGURE_1_NAME)

        then:
        response.getText() == "[]"
    }

    void "test traviz manga with one episode and one figure"() {
        def mangaEpisode = new MangaEpisode(maeNumber: 1).save(failOnError: true)
        def figure = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        mangaEpisode.addToFigures(figure).save(failOnError: true)

        when:
        controller.travizDataManga(FIGURE_1_NAME + " (Figure)")

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + " (Figure)\",\"text\":\"" + MANGA_1_NUMBER + "\"}]"
    }

    void "test traviz manga with two figures"() {
        def mangaEpisode = new MangaEpisode(maeNumber: 1).save(failOnError: true)
        def figure1 = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        def figure2 = new Figure(figName: FIGURE_2_NAME, figGender: "Male").save(failOnError: true)
        mangaEpisode.addToFigures(figure1).save(failOnError: true)
        mangaEpisode.addToFigures(figure2).save(failOnError: true)

        when:
        controller.travizDataManga(FIGURE_1_NAME + ' (Figure),' + FIGURE_2_NAME + " (Figure)")

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + " (Figure)\",\"text\":\"" + MANGA_1_NUMBER + "\"}, " +
                "{\"edition\":\"" + FIGURE_2_NAME + " (Figure)\",\"text\":\"" + MANGA_1_NUMBER + "\"}]"
    }

    void "test traviz manga with two episodes"() {
        def mangaEpisode1 = new MangaEpisode(maeNumber: MANGA_1_NUMBER).save(failOnError: true)
        def mangaEpisode2 = new MangaEpisode(maeNumber: MANGA_2_NUMBER).save(failOnError: true)
        def figure = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        mangaEpisode1.addToFigures(figure).save(failOnError: true)
        mangaEpisode2.addToFigures(figure).save(failOnError: true)

        when:
        controller.travizDataManga(FIGURE_1_NAME + " (Figure)")

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + " (Figure)\",\"text\":\"" + MANGA_1_NUMBER + " " + MANGA_2_NUMBER + "\"}]"
    }
	
	    void "test getFigureInformation figure exists"() {
        new Figure(figName: FIG_1_NAME).save(failOnError: true)

        when:
        controller.getFigureInformation(FIG_1_NAME + " (Figure)")

        then:
        response.text == '{"success":true,"count":1,"data":{"Name":"'+FIG_1_NAME+'"}}'
    }

    void "test getFigureInformation ignores case"() {
        new Figure(figName: FIG_1_NAME).save(failOnError: true)

        when:
        controller.getFigureInformation(FIG_1_NAME_LOWERCASE + " (Figure)")

        then:
		response.text == '{"success":true,"count":1,"data":{"Name":"'+FIG_1_NAME+'"}}'
    }

    void "test getFigureInformation empty response when not found"() {
        when:
        controller.getFigureInformation(FOO)

        then:
        response.text == '{"success":false,"count":0,"data":{}}'
    }

    void "test getFigureInformation marine"() {
        def figure = new Figure(figName: FIG_1_NAME).save(failOnError: true)
        new Marine(figure: figure).save(failOnError: true)

        when:
        controller.getFigureInformation(MARINE + " (Group)")

        then:
        response.text == '{"success":true,"count":1,"data":{"Group":["' + FIG_1_NAME + '"]}}'
    }

    void "test getFigureInformation marine ignores case"() {
        def figure = new Figure(figName: FIG_1_NAME).save(failOnError: true)
        new Marine(figure: figure).save(failOnError: true)

        when:
        controller.getFigureInformation(MARINE_LOWERCASE + " (Group)")

        then:
        response.text == '{"success":true,"count":1,"data":{"Group":["' + FIG_1_NAME + '"]}}'
    }

    void "test getFigureInformation pirate"() {
        def figure = new Figure(figName: FIG_1_NAME).save(failOnError: true)
        new Pirate(figure: figure).save(failOnError: true)

        when:
        controller.getFigureInformation(PIRATE + " (Group)")

        then:
        response.text == '{"success":true,"count":1,"data":{"Group":["' + FIG_1_NAME + '"]}}'
    }

    void "test getFigureInformation pirate ignores case"() {
        def figure = new Figure(figName: FIG_1_NAME).save(failOnError: true)
        new Pirate(figure: figure).save(failOnError: true)

        when:
        controller.getFigureInformation(PIRATE_LOWERCASE + " (Group)")

        then:
        response.text == '{"success":true,"count":1,"data":{"Group":["' + FIG_1_NAME + '"]}}'
    }

    void "test getFigureInformation gang"() {
        def figure = new Figure(figName: FIG_1_NAME).save(failOnError: true)
        def gang = new Gang(ganName: GANG_1_NAME).save(failOnError: true)
        new Pirate(figure: figure).addToGangs(gang).save(failOnError: true)

        when:
        controller.getFigureInformation(GANG_1_NAME + " (Group)")

        then:
        response.text == '{"success":true,"count":1,"data":{"Group":["' + FIG_1_NAME + '"]}}'
    }

    void "test getFigureInformation gang ignores case"() {
        def figure = new Figure(figName: FIG_1_NAME).save(failOnError: true)
        def gang = new Gang(ganName: GANG_1_NAME).save(failOnError: true)
        new Pirate(figure: figure).addToGangs(gang).save(failOnError: true)

        when:
        controller.getFigureInformation(GANG_1_NAME_LOWERCASE + " (Group)")

        then:
        response.text == '{"success":true,"count":1,"data":{"Group":["' + FIG_1_NAME + '"]}}'
    }
	
}
