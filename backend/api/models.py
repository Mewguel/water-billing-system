from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Bill(models.Model):
    account_holder = models.CharField(max_length=100)
    account_number = models.CharField(max_length=10, default="00-00-0000")
    customer_address = models.CharField(max_length=120, default="")
    prev_reading = models.IntegerField(default=0, blank=True, null=True)
    current_reading = models.IntegerField(default=0, blank=True, null=True)
    period_start = models.DateTimeField(default=timezone.now)
    period_end = models.DateTimeField(default=timezone.now)
    penalty = models.FloatField(default=0.00, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User,
                               on_delete=models.CASCADE,
                               related_name="bills")

    def __str__(self) -> str:
        return self.title
