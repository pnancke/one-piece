package one.piece

import com.google.common.base.Strings
import one.piece.util.TravizUtils
import com.google.common.base.Joiner

class TimelineController {
    public static final Joiner EPISODE_JOINER = Joiner.on(" ").skipNulls()

    def index() {}

    def travizDataAnime(String figures) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def result = []
        for (String figureName : figureNamesList) {
            def s = TravizUtils.generateAnimeTravizFor(figureName)
            if (!Strings.isNullOrEmpty(s)) {
                result.add(s)
            }
        }
        render result.toString()
    }

    def travizDataManga(String figures) {
        def figureNamesList = new ArrayList(Arrays.asList(figures.split(',')))
        def result = []
        for (String figureName : figureNamesList) {
            def s = TravizUtils.generateMangaTravizFor(figureName)
            if (!Strings.isNullOrEmpty(s)) {
                result.add(s)
            }
        }
        render result.toString()
    }
}
