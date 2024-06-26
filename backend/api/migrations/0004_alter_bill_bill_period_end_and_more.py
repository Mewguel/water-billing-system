# Generated by Django 5.0.4 on 2024-06-03 01:19

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_bill_bill_period_end_bill_bill_period_start_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_period_end',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='bill',
            name='bill_period_start',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
