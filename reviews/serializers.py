from rest_framework import serializers
from reviews.models import Movie, Review


class ReviewSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    movie_title = serializers.ReadOnlyField(source='movie.title')

    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')

    movie_image = serializers.ReadOnlyField(source='movie.image.url')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Review
        fields = [
            'id', 'owner', 'movie', 'movie_title', 'movie_image', 'created_at',
            'updated_at', 'content', 'rating', 'is_owner', 'profile_id', 'profile_image'
        ]

