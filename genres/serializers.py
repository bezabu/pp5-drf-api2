from rest_framework import serializers
from genres.models import Genre


class GenreSerializer(serializers.ModelSerializer):
    """
    Serializer for the Genre model
    get curator method determines if curently logged in user has curator
    privileges
    """
    is_curator = serializers.SerializerMethodField()
    movies_count = serializers.ReadOnlyField()
    movies_avg = serializers.ReadOnlyField()

    def get_is_curator(self, obj):
        request = self.context['request']
        return request.user.groups.filter(name='Movie Curator').exists()

    class Meta:
        model = Genre
        fields = [
            'id', 'name', 'color', 'is_curator', 'movies_count', 'movies_avg',
        ]
