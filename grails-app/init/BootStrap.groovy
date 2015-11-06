import one.piece.*;

class BootStrap {

    def init = { servletContext ->
        new Gang(ganName: "Gang1").save(failOnError: true)
        new Gang(ganName: "Gang2").save(failOnError: true)
        new MangaEpisode(maeName: "Manga1").save(failOnError: true)
        new MangaEpisode(maeName: "Manga2").save(failOnError: true)
        new AnimeEpisode(aneName: "Anime1").save(failOnError: true)
        new AnimeEpisode(aneName: "Anime2").save(failOnError: true)
        new DevilFruit(defName: "DevilFruit1").save(failOnError: true)
        new DevilFruit(defName: "DevilFruit2").save(failOnError: true)
        new Marine(figure: new Figure(figName: "Figure1", figGender: "Male").save(failOnError: true))
                .save(failOnError: true)
        new Pirate(figure: new Figure(figName: "Figure2", figGender: "Female").save(failOnError: true))
                .save(failOnError: true)
    }
    def destroy = {
    }
}
