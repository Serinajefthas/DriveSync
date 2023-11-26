from django.urls import path
from .views import main

#extensions after api/, redirected from urls.py 
#in applications folder, line: 'path('api/', include('api.urls'))'
urlpatterns = [
    path('', main),
    path('home', main),
]