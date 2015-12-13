package one.piece

class Gang {
    String ganName

    static hasMany = [pirates: Pirate]
    static belongsTo = Pirate

    static constraints = {
    }
}
