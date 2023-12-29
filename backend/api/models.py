from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator
from django.contrib.auth.models import AbstractUser
from shortuuidfield import ShortUUIDField

class Location(models.Model):
    country = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    zipcode = models.CharField(validators = [MinLengthValidator(4)],max_length = 6)

class Car(models.Model):
    TRANSMISSION_CHOICES = [
        ('automatic', 'Automatic'),
        ('manual', 'Manual'),
    ]
    car_id = models.AutoField(primary_key=True)
    image = models.URLField(max_length=20) # refer to it in html: <img src="{{ car.image }}" alt="Car Image">
    model = models.CharField(max_length=20) #includes model and brand
    year = models.PositiveIntegerField()
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    is_available = models.BooleanField(default=True)
    description = models.CharField(max_length=20)
    rent_per_day = models.CharField(max_length=10)
    number_of_people = models.PositiveIntegerField()
    number_of_doors = models.PositiveIntegerField()
    number_of_bags = models.PositiveIntegerField()
    transmission = models.CharField(
        max_length=10,
        choices=TRANSMISSION_CHOICES,
        default='automatic'
    )

# user model handles user auth and storing user related data but if not needed
# then can just have model for storing user's details when book a car
# custom user model used wanting extend/modify builtin 'User' model
class User(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #user_id = ShortUUIDField(primary_key=True, max_length=5, blank=False, null=False)
    fullName = models.CharField(max_length=30)
    # builtin fields
    #username = models.CharField(max_length=30, unique=True)
    #email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=20)
    location = models.ForeignKey(Location, on_delete=models.PROTECT)
    #is_company = models.BooleanField(default=False)

