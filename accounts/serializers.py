from django.db.models import fields
from rest_framework import serializers
from .models import Account

class AddAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model =Account
        fields = ['first_name','last_name','email','phone_number']
        extra_kwargs = {
				'password': {'write_only': True},
		}
    def save(self):
        account = Account(
            email = self.validated_data['email']
        )
        password = self.validated_data['password']
        account.set_password(password)
        account.save()
        return account