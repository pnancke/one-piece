package one.piece


import com.google.common.base.Strings
import org.hibernate.sql.JoinType

class Figure {
    String figName
    String figRace
    String figAge
    String figStatus
    String figOrigin
    String figBirthday
    String figJapaneseVa
    String figRomanizedName
    String figJapaneseName
    String figDebut
    String figResidence
    String figEpithet
    String figHeight
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
        figBirthday nullable: true
        figJapaneseVa nullable: true
        figRomanizedName nullable: true
        figJapaneseName nullable: true
        figDebut nullable: true
        figResidence nullable: true
        figEpithet nullable: true
        figHeight nullable: true
    }

    static Closure createWhereQuery(attribute) {
        def query = {
            createAlias("devilFruit", "df", JoinType.LEFT_OUTER_JOIN)
            createAlias("animeEpisodeAppearance", "ae", JoinType.LEFT_OUTER_JOIN)
            createAlias("mangaEpisodeAppearance", "me", JoinType.LEFT_OUTER_JOIN)
            createAlias("pirate", "pi", JoinType.LEFT_OUTER_JOIN)
            createAlias("pi.gangs", "ga", JoinType.LEFT_OUTER_JOIN)
            or {
                ilike('figName', "%${attribute}%")
                ilike('figRace', "%${attribute}%")
                ilike('figOrigin', "%${attribute}%")
                ilike('df.defName', "%${attribute}%")
                ilike('df.defType', "%${attribute}%")
                ilike('ae.aneName', "%${attribute}%")
                ilike('me.maeName', "%${attribute}%")
                ilike('ga.ganName', "%${attribute}%")
            }
        }
        query
    }

    static List<GString> getGangNames(String term) {
        def gangs = Gang.findAllByGanNameIlike('%' + term + '%', [max: 10, sort: "ganName"])
        def groupNames = []
        groupNames.addAll(gangs.ganName)
        groupNames = groupNames.collect { "$it (Group)" }
        return groupNames
    }

    static List<GString> getFigureNames(String term) {
        def figures = findAllByFigNameIlike('%' + term + '%', [max: 10, sort: "figName"])
        def figNames = []
        figNames.addAll(figures.figName)
        figNames = figNames.collect { "$it (Figure)" }
        figNames
    }

    static getGroup(String entity) {
        ArrayList results
        if ("marine".equalsIgnoreCase(entity)) {
            results = Marine.list().figure.figName
        } else if ("pirate".equalsIgnoreCase(entity)) {
            results = Pirate.list().figure.figName
        } else {
            def gang = Gang.findByGanNameIlike(entity)
            if (gang != null) {
                results = gang.pirates.figure.figName
            } else {
                results = null
            }
        }
        results
    }

    public static getFigures(String entity) {
        def figures = new ArrayList<Figure>()
        if (entity.endsWith(' (Group)')) {
            def group = entity.minus(' (Group)')
            figures = getFiguresFromGroup(group)
        } else if (entity.endsWith(' (Figure)')) {
            def figureName = entity.minus(' (Figure)')
            if (!Strings.isNullOrEmpty(figureName)) {
                figures.add(findByFigNameIlike(figureName))
            }
        } /*else if (entity.endsWith(' (Attribute)')) {
            def attribute = entity.minus(' (Attribute)')
            def criteria = createCriteria()
            Closure query = createWhereQuery(attribute)
            figures = criteria.list(query)
        }*/
        return figures
    }

    static getFiguresFromGroup(String group) {
        ArrayList results
        if (!Strings.isNullOrEmpty(group)) {
            if ("marine".equalsIgnoreCase(group)) {
                results = Marine.findAll().figure
            } else if ("pirate".equalsIgnoreCase(group)) {
                results = Pirate.findAll().figure
            } else {
                def gang = Gang.findByGanNameIlike(group)
                if (gang != null) {
                    results = gang.pirates.figure
                } else {
                    results = null
                }
            }
        } else {
            results = null
        }
        results
    }
}
