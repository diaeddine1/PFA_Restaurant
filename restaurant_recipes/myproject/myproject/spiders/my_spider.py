import scrapy


class MySpiderSpider(scrapy.Spider):
    name = "my_spider"
    def start_requests(self):
        url = 'https://www.afar.com/travel-tips/the-best-restaurants-on-the-french-riviera/'
        tag = getattr(self, 'tag', None)
        if tag is not None:
            url = url + 'tag/' + tag
        yield scrapy.Request(url, self.parse)

    def parse(self, response):

        for item in response.css('div.PagePromoB'):
            yield {
                'restaurant': item.css('.PagePromoB .PagePromo-title .Link::text').get(),
                'img': item.xpath('//img[@class="Image"]/@data-src').get(),
                'description': item.css('div.PagePromo-description::text').get(),
                'adresse': item.css('div.PagePromo-address::text').get(),

            }



