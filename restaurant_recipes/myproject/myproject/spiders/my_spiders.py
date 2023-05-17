import scrapy
class MySpiderSpider(scrapy.Spider):
    name = "my_spiders"
    def start_requests(self):
        url = 'https://www.afar.com/travel-tips/the-best-restaurants-on-the-french-riviera/'
        tag = getattr(self, 'tag', None)
        if tag is not None:
            url = url + 'tag/' + tag
        yield scrapy.Request(url, self.parse)

    def parse(self, response):

        for item in response.css('div.PagePromoB'):
            yield {
                'restaurant': item.css('.IcelI::text').get(),
                

            }



