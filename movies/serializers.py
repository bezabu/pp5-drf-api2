from rest_framework import serializers
from reviews.models import Movie


class MovieSerializer(serializers.ModelSerializer):
    is_curator = serializers.SerializerMethodField()

    def get_is_curator(self, obj):
        request = self.context['request']
        return request.user.groups.filter(name='Movie Curator').exists()

    class Meta:
        model = Movie
        fields = [
            'id', 'title', 'year', 'director', 'genre',
            'actors', 'image', 'is_curator'
        ]