# Generated by Django 5.0.4 on 2024-06-03 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_bill_period_end_alter_bill_period_start'),
    ]

    operations = [
        migrations.AddField(
            model_name='bill',
            name='penalty',
            field=models.FloatField(blank=True, default=0.0, null=True),
        ),
    ]
