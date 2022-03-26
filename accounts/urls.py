from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_users, name='get_users'),
    path('register', views.registerUser, name='registerUser'),
    path('profile', views.getUserProfile, name='user_profile')
]
