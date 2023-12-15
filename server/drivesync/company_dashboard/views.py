from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from .models import *
from .templates import *

def index(request):
    #if authenticated
    return render(request, 'company_dashboard/home.html')

# list all cars
def car_list(request):
    car_list = Car.objects.all()
    return render(request, 'cars.html', {'cars': 'car_list'})
# car_list.html 
# <h2>List of Cars</h2>
# <ul>
#     {% for car in car_list %}
#         <li>{{ car.car_name }} - {{ car.is_available }}</li>
#     {% endfor %}
# </ul>

# return specific car by filter (ascending)
def find_car(request, filter):
    # filter by drop down option; colour or car name or location
    if filter != car_name or filter != color:
        return "not a valid filter"
    car = get_object_or_404(Car, filter=filter)
    return render(request, 'cars.html', {'company_dashboard': company, 'cars': car})


