package one.piece

class Figure {
    String figName
    String figRace
    String figAge
    String figStatus
    String figOrigin
    static hasMany = [mangaEpisodeAppearance: MangaEpisode, animeEpisodeAppearance: AnimeEpisode]
    String figPicture
    DevilFruit devilFruit
    Marine figMarine
    Pirate figPirate
    static belongsTo = [marine: Marine, pirate: Pirate]
    String url
    static transients = ['url']

    boolean equals(o) {
        if (this.is(o)) return true
        if (getClass() != o.class) return false

        Figure figure = (Figure) o

        if (figName != figure.figName) return false

        return true
    }

    int hashCode() {
        return (figName != null ? figName.hashCode() : 0)
    }
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
        figStatus nullable: true
    }
}
