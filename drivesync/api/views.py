from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

# company(cardealer), car(vehicles), location(area), user, rentals(orders)

from rest_framework import generics, permissions, viewsets, status
from .models import *
from .serializers import *
from .forms import CustomUserCreationForm
from rest_framework.permissions import IsCompany

class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRegistrationAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request):
        form = UserCreationForm(request.data)

        if form.is_valid():
            user = form.save()
            # here would create and save company profile instance for user if
            # necessary but that is done in signals.py methods coded
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

# if want return company profile info
class CompanyProfileAPIView(APIView):
    def get(self, request):
        company_profile = CompanyProfile.objects.get(user=request.user)
        serializer = CompanyProfileSerializer(company_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CarCreateAPIView(generics.CreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    # IsAuthenticated is built-in django method that checks user is authenticated
    permission_classes = [permissions.IsAuthenticated, IsCompany]
    
    # def get(self, request, id):
    #     instance = get_object_or_404(Car, id=id)
    #     return HttpResponse(f"Details of {Car}")

class ManageCarsAPIView(generics.ListAPIView):
    serializer_class = CarSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        company_profile = CompanyProfile.objects.get(user=user)
        return Car.objects.filter(company=company_profile)    

class RentalsListAPIView(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = RentalsSerializer() # (queryset)
    # return Response(serializer.data) - only if in method not this class




@api_view(['GET'])
def index(request):
    return Response({"Success"})

# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited by company only
#     """
#     queryset = User.objects.all().order_by('username')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class YourModelViewSet(generics.ModelViewSet):
#     queryset = YourModel.objects.all()
#     serializer_class = YourModelSerializer

#     def get_permissions(self):
#         if self.action == 'manage_vehicles':
#             permission_classes = [IsCompany, CanManageVehicles]
#         else:
#             permission_classes = [IsCompany]

#         return [permission() for permission in permission_classes]

#     def manage_vehicles(self, request, *args, **kwargs):
#         # Your implementation for managing vehicles
#         return Response({'message': 'Managed vehicles successfully'}, status=status.HTTP_200_OK)

# api: manage orders(company sees all rentals and users see their specific rentals)


# company: add cars, manage cars, 
# user: 
