from django.db import models

# Create your models here.
# models = framework in python allows us easily write and use dbs w/out specific code
# basic rule=fat models, thin views, ie most logic in models
class User(models.Model):
    firstName = models.StringField(max_length=20, unique=True, NULLABLE=False)
    lastName = models.StringField(max_length=20, unique=True, NULLABLE=False)
    email = models.EmailField(max_length=50, unique=True, NULLABLE=False)
    phone = models.PositiveIntegerField(max_length=10, unique=True, NULLABLE=False)
    #customer_id

    # User methods
    #def generate_cust_id():

