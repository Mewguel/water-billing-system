from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Bill


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
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
                  "created_at",
                  "author",
                  ]
        extra_kwargs = {"author": {"read_only": True}}
