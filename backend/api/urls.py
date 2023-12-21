from django.urls import path, include
from .views import *

urlpatterns = [
    path('cars/', CarListAPIView.as_view(), name='car_list'),
    path('cars/<int:car_id>/', CarDetailAPIView.as_view, name='car_detail'),
#    path('cars/bookingform/<int:car_id>/', AddRentalAPIView.as_view(), name='add_rental'),
    path('clients/', UserListAPIView.as_view(), name='client_list'),
    path('clients/<int:user_id>/', UserDetailAPIView.as_view(), name='client_detail'),
    path('clients/create/', UserCreateView.as_view(), name='client-create'),
]