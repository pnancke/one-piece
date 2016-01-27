package one.piece

class AnimeEpisode {
    String aneName
    int aneNumber
    int aneSeasonNr
    int aneEpisodeNr
    String aneIMdBUrl
    float aneRate
    int aneNumVotes
    static hasMany = [figures : Figure]
    static belongsTo = Figure

    static constraints = {
        aneName nullable: true
        aneSeasonNr nullable: true
        aneEpisodeNr nullable: true
        aneRate nullable: true
        aneNumVotes nullable: true
        aneIMdBUrl nullable: true
    }
}
