# Generated by Django 5.0.6 on 2024-06-27 17:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_alter_movie_options'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='author',
            new_name='owner',
        ),
    ]