from django.db.models import Count
from rest_framework import generics, permissions, filters
from django.core.exceptions import PermissionDenied
from .models import Movie
from .serializers import MovieSerializer
from pp5_drf_api2.permissions import IsOwnerOrReadOnly, HasMoviePermissions, IsCuratorOrReadOnly



class MovieList(generics.ListAPIView):
    """
    List all movies
    No Create view
    """
    
    queryset = Movie.objects.annotate(
        reviews_count=Count('reviews', distinct=True)
    ).order_by('-reviews_count')
    
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    


class MovieCreate(generics.CreateAPIView):
    """
    Movie create view
    Only accessible by movie curators
    """
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticated, IsCuratorOrReadOnly]

class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a movie and edit or delete it if you own it.
    """
    serializer_class = MovieSerializer
    permission_classes = [HasMoviePermissions]
    #permission_classes = [IsCuratorOrReadOnly]
    queryset = Movie.objects.all()


