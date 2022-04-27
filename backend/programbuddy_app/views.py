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

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user) # auto-assign user id
    #     return super().perform_create(serializer)

    def perform_update(self, serializer):
        print("USER:", self.request.user)
        return super().perform_update(serializer)

    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        # elif self.request.method == "POST":
        #     return(permissions.IsAuthenticated(),)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAuthenticatedOrReadOnly(),)

class ForumViewSet(ModelViewSet): # Gonna change to add admin privileges 
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user) # auto-assign user id
        return super().perform_create(serializer)

    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        # elif self.request.method == "POST":
        #     return(permissions.IsAuthenticated(),)
        elif self.request.method == "DELETE":
            return (permissions.IsAuthenticated(),)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAuthenticatedOrReadOnly(),)

    def perform_update(self, serializer):
        print("USER:", self.request.user)
        return super().perform_update(serializer)

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)

    def perform_update(self, serializer):
        print("USER:", self.request.user)
        return super().perform_update(serializer)

    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        # elif self.request.method == "POST":
        #     return(permissions.IsAuthenticated(),)
        elif self.request.method == "DELETE":
            return (permissions.IsAuthenticated(),)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAuthenticatedOrReadOnly(),)