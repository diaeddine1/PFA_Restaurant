
from django.urls import path

from django.urls import path
from .views import recipe_list

from . import views
app_name = 'recipes'

urlpatterns = [

    path('', views.recipe_list, name='recipe_list'),
    path('data',views.scrapped_data),

    
]

