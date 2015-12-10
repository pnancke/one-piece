import one.piece.*;

class BootStrap {

    def init = { servletContext ->
        new Gang(ganName: "Gang1").save(failOnError: true)
        new Gang(ganName: "Gang2").save(failOnError: true)
        def mangaEpisode = new MangaEpisode(maeName: "Manga1", maeNumber: 1).save(failOnError: true)
        def mangaEpisode2 = new MangaEpisode(maeName: "Manga2", maeNumber: 2).save(failOnError: true)
        def animeEpisode = new AnimeEpisode(aneName: "Anime1", aneNumber: 1).save(failOnError: true)
        def animeEpisode2 = new AnimeEpisode(aneName: "Anime2", aneNumber: 2).save(failOnError: true)
        new DevilFruit(defName: "DevilFruit1").save(failOnError: true)
        new DevilFruit(defName: "DevilFruit2").save(failOnError: true)
        def figure = new Figure(figName: "Figure1", figGender: "Male").save(failOnError: true)
        def figure2 = new Figure(figName: "Figure2", figGender: "Female").save(failOnError: true)
        mangaEpisode.addToFigures(figure).save(failOnError: true)
        mangaEpisode.addToFigures(figure2).save(failOnError: true)
        mangaEpisode2.addToFigures(figure2).save(failOnError: true)
        animeEpisode.addToFigures(figure).save(failOnError: true)
        animeEpisode.addToFigures(figure2).save(failOnError: true)
        animeEpisode2.addToFigures(figure2).save(failOnError: true)
        new Marine(figure: figure).save(failOnError: true)
        new Marine(figure: figure2).save(failOnError: true)
        new Pirate(figure: figure2).save(failOnError: true)
    }
    def destroy = {
    }
}
