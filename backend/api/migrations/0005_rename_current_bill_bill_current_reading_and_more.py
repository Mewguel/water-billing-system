# Generated by Django 5.0.4 on 2024-06-03 01:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_bill_bill_period_end_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bill',
            old_name='current_bill',
            new_name='current_reading',
        ),
        migrations.RenameField(
            model_name='bill',
            old_name='bill_period_end',
            new_name='period_end',
        ),
        migrations.RenameField(
            model_name='bill',
            old_name='bill_period_start',
            new_name='period_start',
        ),
        migrations.RenameField(
            model_name='bill',
            old_name='prev_bill',
            new_name='prev_reading',
        ),
    ]
