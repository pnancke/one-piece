package one.piece.util

import groovy.json.JsonBuilder

public class HttpUtils {

    static buildJsonResponse(successResponse, String term) {
        def json = new JsonBuilder()
        def resultCount = 0
        if (successResponse) {
            resultCount = 1
        }
        json {
            success(successResponse)
            count(resultCount)
            data(term)
        }
        json
    }
}
