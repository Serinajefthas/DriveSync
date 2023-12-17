from django.urls import path
from .views import UserCreateAPIView, CarCreateAPIView, ManageCarsAPIView, RentalsListAPIView, CompleteOrderAPIView, HistoryAPIView, DeleteCarAPIView

urlpatterns = [
    #'name' variable acts as reference to url endpoint, so when use name variable in
    # django templates and need update url path endpoint, just need update it once
    # as endpoint as name variable will ref the endppint even when updated
    path('register/', UserCreateAPIView.as_view(), name='create_user_api'),
    path('add_car/', CarCreateAPIView.as_view(), name='create_car_api'),
    path('manage_cars/', ManageCarsAPIView.as_view(), name='manage_vehicles_api'),
    path('rentals_list/', RentalsListAPIView.as_view(), name='rentals_list_api'),
    path('complete_order/', CompleteOrderAPIView.as_view(), name='complete_order_api'),
    path('history/', HistoryAPIView.as_view(), name='history_api'),
    path('delete_car/', DeleteCarAPIView.as_view(), name='delete_vehicle_api'),
]
