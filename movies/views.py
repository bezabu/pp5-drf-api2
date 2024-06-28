from rest_framework import generics, permissions
from .models import Movie
from .serializers import MovieSerializer
from pp5_drf_api2.permissions import IsOwnerOrReadOnly



class MovieList(generics.ListCreateAPIView):
    """
    List all movies
    No Create view (post method), as profile creation handled by django signals
    """
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Movie.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
