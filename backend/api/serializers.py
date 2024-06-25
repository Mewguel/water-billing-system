from rest_framework import serializers
from .models import Bill

from custom_user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id",
                  "email",
                  "password",
                  "firstname",
                  "lastname",
                  "username",
                  "address"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            firstname=validated_data.get('firstname', ''),
            lastname=validated_data.get('lastname', ''),
            address=validated_data.get('address', '')
        )
        return user


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ["id",  # Billing Statemeng No.
                  "account_holder",
                  "account_number",
                  "customer_address",
                  "prev_reading",
                  "current_reading",
                  "period_start",
                  "period_end",
                  "penalty",
                  "created_at",
                  "author",
                  ]
        extra_kwargs = {"author": {"read_only": True}}
