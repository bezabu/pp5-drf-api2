from rest_framework import serializers
from .models import Movie, Review


class MovieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = [
            'id', 'title', 'year', 'director', 'genre',
            'actors', 'image'
        ]

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = [
            'id', 'author', 'movie_title', 'created_at',
            'updated_at', 'content', 'rating'
        ]