package one.piece

class Pirate {
    Figure figure
    Gang gang
    String pirPosition
    int pirBounty

    static belongsTo = Figure

    static constraints = {
        pirPosition nullable: true
        pirBounty nullable: true
        gang nullable: true
    }
}
