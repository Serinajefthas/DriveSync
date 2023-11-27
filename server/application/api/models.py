from django.core.validators import RegexValidator
from django.db import models

# Create your models here.
# models = framework in python allows us easily write and use dbs w/out specific code
# basic rule=fat models, thin views, ie most logic in models
class User(models.Model):
    firstName = models.CharField(max_length=20, unique=True, null=False, blank=False,
                                  validators=[RegexValidator(regex='^[A-Za-z]*$', message='Only letters are allowed.')])
    lastName = models.CharField(max_length=20, unique=True, null=False, blank=False,
                                validators=[RegexValidator(regex='^[A-Za-z]*$', message='Only letters are allowed.')])
    email = models.EmailField(max_length=50, unique=True, null=False, blank=False)
    phone = models.PositiveIntegerField(max_length=10, unique=True, null=False, blank=False)
    #customer id num
    customer_id = models.PositiveIntegerField(max_length=15, unique=True, null=False, blank=False)

    # User methods
    #def generate_cust_id():

