from django.db import models

# All models in api app

# Models for company portal, ie relevant 'classes' 
# with methods company has access to; location, creating company, cars

# class Location(models.Model):
#     country = models.CharField(max_length=20)
#     city = models.CharField(max_length=20)
#     zipcode = models.CharField(validators = [MinLengthValidator(4), MaxLengthValidator(6)],max_length = 6)

# class Company(models.Model):
#     company = models.OneToOneField(User, on_delete=models.PROTECT)
#     earnings = models.CharField(max_length=20)

# class Car(models.Model):
#     car_name = models.CharField(max_length=20) #includes model and brand
#     color = models.CharField(max_length=20)
#     location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
#     is_available = models.BooleanField(default=True)
#     description = models.CharField(max_length=20)
#     cost = models.CharField(max_length=10)