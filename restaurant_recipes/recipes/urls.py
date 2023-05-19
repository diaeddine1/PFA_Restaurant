
from django.urls import path


from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

app_name = 'recipes'

urlpatterns = [

    path('', views.recipe_list, name='recipe_list'),
    path('data/',csrf_exempt(views.scrapped_data)),

    
]




