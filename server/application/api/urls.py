from django.urls import path
from .views import UserView

#extensions after api/, redirected from urls.py 
#in applications folder, line: 'path('api/', include('api.urls'))'
urlpatterns = [
    path('home', UserView.as_view()),
]