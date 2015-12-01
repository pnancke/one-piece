package one.piece

class CrawlerController {

    def crawlerService
    def returnInfoBox(){
        crawlerService.serviceMethod()
    }

    def index() {
        crawlerService.serviceMethod();
        System.out.print("yhu")
        render "a"
    }
}
