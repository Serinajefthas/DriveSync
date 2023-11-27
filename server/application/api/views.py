#from shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from .models import User

# Create your views here.
#def main(request):
#    return HttpResponse("<h1>DriveSync<h1>")

class UserView(generics.CreateAPIView):
    """View and create user objects"""
    queryset = User.objects.all()
    serializer_class = UserSerializer
