from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("users", UserViewSet, basename="user")
router.register("user-profiles", UserProfileViewSet, basename="user-profile")
router.register("languages", LanguageViewSet, basename="language")
router.register("forums", ForumViewSet, basename="forum")
router.register("posts", PostViewSet, basename="post")
router.register("comments", CommentViewSet, basename="comment")

urlpatterns = [
    path("", include(router.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout)
]
