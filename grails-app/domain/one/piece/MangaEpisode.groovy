package one.piece

class MangaEpisode {
    String maeName
    int maeNumber
    static hasMany = [figures : Figure]
    static belongsTo = Figure

    static constraints = {
        maeName nullable: true
    }
}
