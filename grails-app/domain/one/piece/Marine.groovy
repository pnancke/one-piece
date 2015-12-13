package one.piece

class Marine {
    Figure figure
    String marRank
	
    static belongsTo = Figure

    static constraints = {
        marRank nullable: true
    }
}
