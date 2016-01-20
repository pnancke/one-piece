package one.piece

class Pirate {
    Figure figure
    String pirPosition
    String pirBounty

    static belongsTo = [Figure]
    static hasMany = [gangs: Gang]

    static constraints = {
        pirPosition nullable: true
        pirBounty nullable: true
        gangs nullable: true
    }
}
