from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Movie, Review
from .serializers import MovieSerializer, ReviewSerializer


class MovieList(APIView):
    """
    List all movies
    No Create view (post method), as profile creation handled by django signals
    """
    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)


class ReviewList(APIView):
    """
    List all movies
    No Create view (post method), as profile creation handled by django signals
    """
    def get(self, request):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
# Create your views here.
