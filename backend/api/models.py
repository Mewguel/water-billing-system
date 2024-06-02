from django.db import models
from django.contrib.auth.models import User


class Bill(models.Model):
    account_holder = models.CharField(max_length=100)
    account_number = models.CharField(max_length=10, default="00-00-0000")
    customer_address = models.CharField(max_length=120, default="")
    created_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User,
                               on_delete=models.CASCADE,
                               related_name="bills")

    def __str__(self) -> str:
        return self.title
