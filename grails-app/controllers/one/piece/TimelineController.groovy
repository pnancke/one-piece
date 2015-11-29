package one.piece

class TimelineController {

    def index() {
        def figures = Figure.findByFigName(params.name)
        def filter = [name: params.name]

        def model = [figureInstanceList: figures, filters: filter]

        if (request.xhr) {
            // ajax request
            render(template: "figureList", model: model)
        } else {
            model
        }
    }

}
