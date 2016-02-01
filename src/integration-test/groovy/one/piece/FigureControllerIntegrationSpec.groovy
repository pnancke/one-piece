package one.piece

import grails.plugins.rest.client.RestBuilder
import grails.plugins.rest.client.RestResponse
import grails.test.mixin.integration.Integration
import grails.transaction.*
import spock.lang.*

@Integration
@Rollback
class FigureControllerIntegrationSpec extends Specification {

    public static final String FI_ATTRIBUTE = "Fi (Attribute)"
    public static final String FI_ATTRIBUTE_LOWERCASE = "fi (Attribute)"
    public static final String TRAVIZ_DATA_MANGA_URL = "http://localhost:8080/timeline/travizDataManga?figures="
    public static final String TRAVIZ_DATA_ANIME_URL = "http://localhost:8080/timeline/travizDataAnime?figures="

    def setup() {
    }

    def cleanup() {
    }
}
