package one.piece

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(TimelineController)
@Mock([Figure, AnimeEpisode])
class TimelineControllerSpec extends Specification {


    public static final String FIGURE_1_NAME = "Figure1"
    public static final String FIGURE_2_NAME = "Figure2"
    public static final int ANIME_1_NUMBER = 1
    public static final int ANIME_2_NUMBER = 2
    public static final int MANGA_1_NUMBER = 1
    public static final int MANGA_2_NUMBER = 2

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
        controller.travizDataAnime(FIGURE_1_NAME)

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + ANIME_1_NUMBER + "}]"
    }

    void "test traviz anime with two figures"() {
        def animeEpisode = new AnimeEpisode(aneNumber: 1).save(failOnError: true)
        def figure1 = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        def figure2 = new Figure(figName: FIGURE_2_NAME, figGender: "Male").save(failOnError: true)
        animeEpisode.addToFigures(figure1).save(failOnError: true)
        animeEpisode.addToFigures(figure2).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME + ',' + FIGURE_2_NAME)

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + ANIME_1_NUMBER + "}, " +
                "{\"edition\":\"" + FIGURE_2_NAME + "\",\"text\":" + ANIME_1_NUMBER + "}]"
    }

    void "test traviz anime with two episodes"() {
        def animeEpisode1 = new AnimeEpisode(aneNumber: ANIME_1_NUMBER).save(failOnError: true)
        def animeEpisode2 = new AnimeEpisode(aneNumber: ANIME_2_NUMBER).save(failOnError: true)
        def figure = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        animeEpisode1.addToFigures(figure).save(failOnError: true)
        animeEpisode2.addToFigures(figure).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME)

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + ANIME_1_NUMBER + "}, " +
                "{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + ANIME_2_NUMBER + "}]"
    }

    void "test traviz manga with one figure results empty array"() {
        new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)

        when:
        controller.travizDataManga(FIGURE_1_NAME)

        then:
        response.getText() == "[]"
    }

    void "test traviz manga with one episode and one figure"() {
        def mangaEpisode = new AnimeEpisode(aneNumber: 1).save(failOnError: true)
        def figure = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        mangaEpisode.addToFigures(figure).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME)

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + MANGA_1_NUMBER + "}]"
    }

    void "test traviz manga with two figures"() {
        def mangaEpisode = new AnimeEpisode(aneNumber: 1).save(failOnError: true)
        def figure1 = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        def figure2 = new Figure(figName: FIGURE_2_NAME, figGender: "Male").save(failOnError: true)
        mangaEpisode.addToFigures(figure1).save(failOnError: true)
        mangaEpisode.addToFigures(figure2).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME + ',' + FIGURE_2_NAME)

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + MANGA_1_NUMBER + "}, " +
                "{\"edition\":\"" + FIGURE_2_NAME + "\",\"text\":" + MANGA_1_NUMBER + "}]"
    }

    void "test traviz manga with two episodes"() {
        def mangaEpisode1 = new AnimeEpisode(aneNumber: MANGA_1_NUMBER).save(failOnError: true)
        def mangaEpisode2 = new AnimeEpisode(aneNumber: MANGA_2_NUMBER).save(failOnError: true)
        def figure = new Figure(figName: FIGURE_1_NAME, figGender: "Male").save(failOnError: true)
        mangaEpisode1.addToFigures(figure).save(failOnError: true)
        mangaEpisode2.addToFigures(figure).save(failOnError: true)

        when:
        controller.travizDataAnime(FIGURE_1_NAME)

        then:
        response.getText() == "[{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + MANGA_1_NUMBER + "}, " +
                "{\"edition\":\"" + FIGURE_1_NAME + "\",\"text\":" + MANGA_2_NUMBER + "}]"
    }
}
