package one.piece

class MangaEpisode {
    String maeName
    int maeVolume
    int maeNumber
    String maeRelease
    static hasMany = [figures : Figure]
    static belongsTo = Figure

    static constraints = {
        maeName nullable: true
        maeVolume nullable: true
        maeRelease nullable: true
    }
}
