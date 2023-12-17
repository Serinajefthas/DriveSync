from django.urls import path, include
from .views import * # UserView, CreateUserView

urlpatterns = [
    path('login/', UserView.as_view()), # press login button
    path('register/', CreateUserView.as_view()),
    path('auth/', CreateUserView.as_view()), #once logged in
    path('logout/', logout_view.as_view),
    #... etc as add views: add_vehicle, manage_rentals
]