# Generated by Django 4.1 on 2024-07-03 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('likes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='like',
            name='flavour',
            field=models.IntegerField(choices=[(0, 'heart'), (1, 'smiley face'), (2, 'thumbs up'), (3, 'laugh'), (4, 'applause')], default=0),
        ),
    ]
