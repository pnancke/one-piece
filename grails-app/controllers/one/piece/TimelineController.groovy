package one.piece

class TimelineController {

    def index() {
        def query = {
            if (params.name) {
                ilike('figName', '%' + params.name + '%')
            }
            if (params.sort) {
                order(params.sort, params.order)
            }
        }

        def criteria = Figure.createCriteria()
        params.max = Math.min(params.max ? params.int('max') : 20, 100)
        def figures = criteria.list(query, max: params.max, offset: params.offset)
        def filters = [name: params.name]

        def model = [figureInstanceList: figures, figureInstanceTotal: figures.totalCount, filters: filters]

        if (request.xhr) {
            // ajax request
            render(template: "figureList", model: model)
        } else {
            model
        }
    }

}
