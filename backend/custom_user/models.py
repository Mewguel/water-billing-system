from django_use_email_as_username.models import BaseUser, BaseUserManager
from django.db import models


class User(BaseUser):
    firstname = models.CharField(max_length=30, blank=True, null=True)
    lastname = models.CharField(max_length=30, blank=True, null=True)
    objects = BaseUserManager()
