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

        yield {
            'restaurant': response.css('.PagePromoB .PagePromo-title .Link::text').getall(),
            'img': response.xpath('//figure[@class="Figure"]/picture/source/@data-srcset').extract(),
            'description': response.css('div.PagePromo-description::text').getall(),
            'adresse': response.css('div.PagePromo-address::text').getall(),


        }

