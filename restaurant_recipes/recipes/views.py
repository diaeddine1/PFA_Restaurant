
# Create your views here.
from django.shortcuts import render
from .models import Recipe
from django.views.decorators.http import require_GET
from django.http import JsonResponse
import json

def recipe_list(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipe_list.html', {'recipes': recipes})


@require_GET
def scrapped_data(request):
    # Load the scrapped data from the JSON file
    with open('myproject/data.json', 'r',encoding='utf8') as file:
        scrapped_data = json.load(file)

    # Return the scrapped data as a JSON response
    return JsonResponse({'scrapped_data': scrapped_data})

