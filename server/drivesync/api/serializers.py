from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Vehicles

# serializers convert django model data types into json format
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'full_name', is_company]
        # password field used during deserialization (parsing input data), 
        # but not during serialization (output data) for security
        extra_kwargs = {'password': {'write_only': True}}

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class RentalsSerializer():
    class Meta:
        model = Rentals
        fields = '__all__'

class CompanyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyProfile
        fields = '__all__'