from lib2to3.pgen2 import token
from django.db.models import fields
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers
from .models import Account


class AddAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email', 'phone_number']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def save(self):
        account = Account(
            email=self.validated_data['email']
        )
        password = self.validated_data['password']
        account.set_password(password)
        account.save()
        return account


class UserSerializer(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Account
        fields = ['id', 'first_name', 'last_name',
                  'email', 'phone_number', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Account
        fields = ['id', 'first_name', 'last_name',
                  'email', 'phone_number', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
