from django.contrib import admin
from django_use_email_as_username.admin import BaseUserAdmin
from .forms import UserChangeForm, UserCreationForm

from .models import User


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    ordering = ('email',)
    search_fields = ('email', 'firstname', 'lastname', 'username', 'address')
    list_display = ('email',
                    'firstname',
                    'lastname',
                    'username',
                    'address',
                    'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('firstname',
                                      'lastname',
                                      'username',
                                      'address')}),
        ('Permissions',
         {'fields': ('is_active',
                     'is_staff',
                     'is_superuser',
                     'groups',
                     'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email',
                       'password1',
                       'password2',
                       'firstname',
                       'lastname',
                       'username',
                       'address'),
        }),
    )


admin.site.register(User, UserAdmin)
