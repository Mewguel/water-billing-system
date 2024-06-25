from django.contrib import admin
from .models import Bill


@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
    list_display = ('account_holder',
                    'account_number',
                    'customer_address',
                    'prev_reading',
                    'current_reading',
                    'period_start',
                    'period_end',
                    'penalty',
                    'created_at',
                    'author')
    search_fields = ('account_holder', 'account_number', 'customer_address')
    list_filter = ('period_start', 'period_end', 'created_at', 'author')