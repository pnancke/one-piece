import one.piece.*;

class BootStrap {

    def init = { servletContext ->
        def mangaEpisode = new MangaEpisode(maeName: "Manga1", maeNumber: 1).save(failOnError: true)
        def mangaEpisode2 = new MangaEpisode(maeName: "Manga2", maeNumber: 2).save(failOnError: true)
        def animeEpisode = new AnimeEpisode(aneName: "Anime1", aneNumber: 1).save(failOnError: true)
        def animeEpisode2 = new AnimeEpisode(aneName: "Anime2", aneNumber: 2).save(failOnError: true)
        new DevilFruit(defName: "DevilFruit1").save(failOnError: true)
        new DevilFruit(defName: "DevilFruit2").save(failOnError: true)
        def figure = new Figure(figName: "Figure1", figGender: "Male").save(failOnError: true)
        def figure2 = new Figure(figName: "Figure2", figGender: "Female").save(failOnError: true)
        def figure3 = new Figure(figName: "Figure3", figGender: "Female").save(failOnError: true)
        mangaEpisode.addToFigures(figure).save(failOnError: true)
        mangaEpisode.addToFigures(figure2).save(failOnError: true)
        mangaEpisode2.addToFigures(figure2).save(failOnError: true)
        animeEpisode.addToFigures(figure).save(failOnError: true)
        animeEpisode.addToFigures(figure2).save(failOnError: true)
        animeEpisode2.addToFigures(figure2).save(failOnError: true)
        new Marine(figure: figure).save(failOnError: true)
        new Marine(figure: figure2).save(failOnError: true)
        def pirate = new Pirate(figure: figure).save(failOnError: true)
        def pirate2 = new Pirate(figure: figure2).save(failOnError: true)
        def gang = new Gang(ganName: "Gang1", pirate: pirate).save(failOnError: true)
        new Gang(ganName: "Gang2", pirate: pirate2).save(failOnError: true)
        new Pirate(figure: figure3, gang: gang).save(failOnError: true)

        for (int i = 5; i < 800; i++) {
            def episode = new AnimeEpisode(aneNumber: i).save()
            episode.addToFigures(figure).save()
        }
    }
    def destroy = {
    }
}
