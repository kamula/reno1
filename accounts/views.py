from django.shortcuts import render
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs) 
        data['first_name'] = self.user.first_name        
        data['last_name'] = self.user.last_name
        data['email'] = self.user.email
        data['phone_number'] = self.user.phone_number    
        
        return data
    

class MyTokenObtainPairView(TokenObtainPairView):
    
    serializer_class = MyTokenObtainPairSerializer