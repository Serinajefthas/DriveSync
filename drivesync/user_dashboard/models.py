from django.db import models
from shortuuidfield import ShortUUIDField
from django.core.validators import *
from django.contrib.auth.models import AbstractUser
from company_dashboard.models import *
from django.core.validators import RegexValidator

# Models for user portal, ie relevant 'classes' 
# with methods users have access to; rentals and creating user

class User(AbstractUser):
    user_id = ShortUUIDField(primary_key=True, max_length=15, help_text='User UUID', blank=False, null=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    fullName = models.CharField(max_length=30)
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=20)
    location = models.ForeignKey(Location, on_delete=models.PROTECT)

class Rentals(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    company = models.ForeignKey(Company, on_delete=models.PROTECT)
    # cost = models.CharField(max_length=10)  in Car model
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    days = models.CharField(max_length=3)
    pickup_date = models.DateField(auto_now=True, auto_now_add=False)
    dropoff_date = models.DateField(auto_now=True, auto_now_add=False)