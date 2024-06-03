# Generated by Django 5.0.4 on 2024-06-03 01:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_title_bill_account_holder_remove_bill_content_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='bill',
            name='bill_period_end',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='bill',
            name='bill_period_start',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='bill',
            name='current_bill',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='bill',
            name='prev_bill',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]