package one.piece

class AnimeEpisode {
    String aneName
    static hasMany = [figures : Figure]
    static belongsTo = Figure

    static constraints = {
        aneName nullable: true
    }
}
