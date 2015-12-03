package one.piece

class AnimeEpisode {
    String aneName
    int aneNumber
    static hasMany = [figures : Figure]
    static belongsTo = Figure

    static constraints = {
        aneName nullable: true
    }
}
