from django.db import models
from django.contrib.auth.models import User


class Bill(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User,
                               on_delete=models.CASCADE,
                               related_name="bills")

    def __str__(self) -> str:
        return self.title
