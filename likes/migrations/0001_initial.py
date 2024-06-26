# Generated by Django 5.0.6 on 2024-06-28 16:12

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('reviews', '0006_rename_movie_title_review_movie'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('flavour', models.IntegerField(choices=[(0, 'heart'), (1, 'smiley face'), (2, 'thumbs up'), (4, 'laugh'), (5, 'applause')], default=0)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('review', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='reviews.review')),
            ],
            options={
                'ordering': ['-created_at'],
                'unique_together': {('owner', 'review')},
            },
        ),
    ]
