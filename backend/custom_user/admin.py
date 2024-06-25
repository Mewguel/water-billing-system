from django.contrib import admin
from django_use_email_as_username.admin import BaseUserAdmin
from .forms import UserChangeForm, UserCreationForm

from .models import User


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    list_display = ('email',
                    'firstname',
                    'lastname',
                    'is_active',
                    'is_staff',
                    'is_superuser')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('firstname', 'lastname')}),
        ('Permissions', {'fields': ('is_active',
                                    'is_staff',
                                    'is_superuser',
                                    'groups',
                                    'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None,
         {'classes': ('wide',),
          'fields': ('email', 'password1', 'password2')}),
    )


admin.site.register(User, BaseUserAdmin)
