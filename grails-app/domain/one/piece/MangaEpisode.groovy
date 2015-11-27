package one.piece

class MangaEpisode {
    String maeName
    static hasMany = [figures : Figure]
    static belongsTo = Figure

    static constraints = {
        maeName nullable: true
    }
}
