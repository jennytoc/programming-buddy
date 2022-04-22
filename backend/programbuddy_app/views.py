from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.permissions import SAFE_METHODS, BasePermission
from .serializers import *
from .views_auth import *

class PostUserPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAuthenticatedOrReadOnly(),)

class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class LanguageViewSet(ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

class ForumViewSet(ModelViewSet): # Gonna change to add admin privileges 
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer

class PostViewSet(ModelViewSet, PostUserPermission): # Change to only let users comment
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):

        serializer.save(user=self.request.user) # auto-assign user id
        return super().perform_create(serializer)

    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        elif self.request.method == "DELETE":
            return (permissions.IsAuthenticated(),)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAuthenticatedOrReadOnly(),)

    def perform_update(self, serializer):
        # current_post = serializer.instance
        print("USER:", self.request.user)
        # if current_post.user != self.request.user:
        #     raise JsonResponse({"error":"unable to edit post"}, status=403)
        return super().perform_update(serializer)


class CommentViewSet(ModelViewSet, PostUserPermission):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_permissions(self):
        if self.request.method == "DELETE":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAuthenticatedOrReadOnly(),)
