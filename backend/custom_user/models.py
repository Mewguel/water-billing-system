from django_use_email_as_username.models import BaseUser, BaseUserManager
from django.db import models


class User(BaseUser):
    firstname = models.CharField(max_length=50, default="default_firstname")
    lastname = models.CharField(max_length=30, default="default_lastname")
    username = models.CharField(max_length=20,
                                unique=True,
                                default="default_username")
    address = models.CharField(max_length=255, blank=True, null=True)
    objects = BaseUserManager()

    def __str__(self):
        return self.email
