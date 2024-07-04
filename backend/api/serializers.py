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
        fields = [
            "id",
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
            "receipt",
            "status",
        ]
        extra_kwargs = {"author": {"read_only": True}}

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class BillReceiptUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ["receipt", "account_holder"]

    def update(self, instance, validated_data):
        if instance.account_holder != validated_data.get('account_holder'):
            error = "Account holder name does not match."
            raise serializers.ValidationError(f"{error}")

        instance.receipt = validated_data.get('receipt', instance.receipt)
        instance.save()
        return instance
