from django.db import models
from django.contrib.auth.models import User

class Location(models.Model):
    country = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    zipcode = models.CharField(validators = [MinLengthValidator(4), MaxLengthValidator(6)],max_length = 6)

# only relevant if need to create 'company' w info about the company, doesnt relate to users
# class Company(models.Model):
#     company = models.OneToOneField(User, on_delete=models.PROTECT)
#     earnings = models.CharField(max_length=20)

# model to indicate whether user associated with company or not
# user field is a OneToOneField linking each CompanyProfile instance to corresponding User instance 
# access 'user' attribute of companyprofile instance, accessing related 'User' instance
class CompanyProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_company = models.BooleanField(default=False)

class Car(models.Model):
    TRANSMISSION_CHOICES = [
        ('automatic', 'Automatic'),
        ('manual', 'Manual'),
    ]
    car_id = models.AutoField(primary_key=True)
    image = models.URLField(max_length=20) # refer to it in html: <img src="{{ car.image }}" alt="Car Image">
    model = models.CharField(max_length=20) #includes model and brand
    year = models.PositiveIntegerField(max_length=4)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    is_available = models.BooleanField(default=True)
    description = models.CharField(max_length=20)
    rent_per_day = models.CharField(max_length=10)
    number_of_people = models.PositiveIntegerField(max_length=2)
    number_of_doors = models.PositiveIntegerField(max_length=2)
    number_of_bags = models.PositiveIntegerField(max_length=2)
    transmission = models.CharField(
        max_length=3,
        choices=TRANSMISSION_CHOICES,
        default='automatic'
    )

class User(AbstractUser):
    user_id = ShortUUIDField(primary_key=True, max_length=15, help_text='User UUID', blank=False, null=False)
    # OneToOneField relationship means one 'user' instance for django's 'User' instance
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    fullName = models.CharField(max_length=30)
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=20)
    location = models.ForeignKey(Location, on_delete=models.PROTECT)
    is_company = models.BooleanField(default=False)

class Rentals(models.Model):
    order_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    company = models.ForeignKey(Company, on_delete=models.PROTECT)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    days = models.CharField(max_length=3)
    pickup_date = models.DateField(auto_now=True, auto_now_add=False)
    dropoff_date = models.DateField(auto_now=True, auto_now_add=False)
