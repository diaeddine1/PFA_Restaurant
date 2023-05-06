from django.db import models
from bs4 import BeautifulSoup
import requests

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()

    def __str__(self):
        return self.title

