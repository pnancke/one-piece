package one.piece

class Figure {
    String figName
    String figRace
    enum FigGender {
        Male("M"), Female("F"), Other("O")
        final String value

        FigGender(String value) {
            this.value = value
        }

        String toString() { value }

        String getKey() { name() }
    }
    FigGender figGender
    int figAge
    String figOrigin
    static hasMany = [mangaEpisodeAppearance: MangaEpisode, animeEpisodeAppearance: AnimeEpisode]
    byte[] figPicture
    DevilFruit devilFruit
    Marine figMarine
    Pirate figPirate
    static belongsTo = [marine: Marine, pirate: Pirate]

    static constraints = {
        figRace nullable: true
        figAge nullable: true
        figOrigin nullable: true
        mangaEpisodeAppearance nullable: true
        animeEpisodeAppearance nullable: true
        figPicture nullable: true
        figMarine nullable: true
        figPirate nullable: true
        devilFruit nullable: true
        marine nullable: true
        pirate nullable: true
    }
}
