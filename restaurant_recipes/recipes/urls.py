from django.urls import path
from .views import recipe_list

app_name = 'recipes'

urlpatterns = [
    path('', recipe_list, name='recipe_list'),
]
