package one.piece

class DevilFruit {
    String defName
	String defMeaning
    String defType

    static constraints = {
		defMeaning nullable: true
        defType nullable: true
    }
}