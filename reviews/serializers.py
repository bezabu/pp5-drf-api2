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
    author = serializers.ReadOnlyField(source='author.username')
    movie_title = serializers.ReadOnlyField(source='movie_title.title')
    
    class Meta:
        model = Review
        fields = [
            'id', 'author', 'movie_title', 'created_at',
            'updated_at', 'content', 'rating'
        ]