package one.piece.util

import groovy.json.JsonBuilder

public class HttpUtils {

    static buildJsonResponse(successResponse, term, int resultCount) {
        def json = new JsonBuilder()

        json {
            success(successResponse)
            count(resultCount)
            data(term)
        }
        json
    }
}
