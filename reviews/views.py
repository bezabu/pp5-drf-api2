from django.http import Http404
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Movie, Review
from .serializers import MovieSerializer, ReviewSerializer
from pp5_drf_api2.permissions import IsOwnerOrReadOnly



class MovieList(APIView):
    """
    List all movies
    No Create view (post method), as profile creation handled by django signals
    """
    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True, context={'request': request})
        return Response(serializer.data)


class ReviewList(APIView):
    """
    List all movies
    """
    serializer_class = ReviewSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    movies_list = Movie.objects.all()

    def get(self, request):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(
            reviews, many=True, context={'request': request}
        )
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ReviewSerializer(
            data=request.data, context={'request': request}
        )
        print(request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )

class ReviewDetail(APIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ReviewSerializer

    def get_object(self, pk):
        try:
            review = Review.objects.get(pk=pk)
            self.check_object_permissions(self.request, review)
            return review
        except Review.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        review = self.get_object(pk)
        serializer = ReviewSerializer(
            review, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        review = self.get_object(pk)
        serializer = ReviewSerializer(
            review, data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        review = self.get_object(pk)
        review.delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )



   