from django import forms
from django.core.exceptions import ValidationError

from custom_user.forms import UserCreationForm
from custom_user.models import User


class RegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ('firstname', 'lastname', 'email', 'username', 'address')

    def clean_email(self):
        email = self.cleaned_data.get("email")
        if User.objects.filter(email=email).exists():
            raise ValidationError("An account with this email already exists!")
        return email
