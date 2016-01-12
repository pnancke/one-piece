package one.piece

class Pirate {
    Figure figure
    Gang gang
    String pirPosition // if the first word of Occcupations are not pirate, then its the pirPosition
    Integer pirBounty

    static belongsTo = [Figure]
    static hasMany = [gangs: Gang]

    static constraints = {
        pirPosition nullable: true
        pirBounty nullable: true
        gang nullable: true
    }
}
