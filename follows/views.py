from rest_framework import generics, permissions
from pp5_drf_api2.permissions import IsOwnerOrReadOnly
from .models import Follow
from .serializers import FollowSerializer


class FollowList(generics.ListCreateAPIView):
    """
    List all follows, i.e. all instances of a user
    following another user'.
    Create a follow, i.e. follow a user if logged in.
    Perform_create: associate the current logged in user with a follower.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class FollowDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a follow
    No Update view.
    Destroy a follower, i.e. unfollow someone if owner
    """
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
