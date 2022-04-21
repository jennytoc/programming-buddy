from re import L
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'first_name', 'last_name', 'email']
    
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        print(validated_data)
        return super().create(validated_data)

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        user = User.objects.get(pk=data['user'])
        serialized = UserSerializer(instance=user)
        data['user'] = serialized.data
        return data

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    forum_value = serializers.ReadOnlyField(source='forum.value')
    class Meta:
        model = Post
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        user = User.objects.get(pk=data['user'])
        serialized = UserSerializer(instance=user)
        data['user'] = serialized.data
        return data
    
class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'

    # this function takes in an obj instance and returns a primitive representation (like dict)
    def to_representation(self, instance): 
        data = super().to_representation(instance) 
        # This returns the instance variables without nested data
        # OrderedDict([('id', 1), ('comment_description', 'How are you?'), ('comment_date_created', '2022-04-17'), ('post', 1), ('user', 2)])
        user = User.objects.get(pk=data['user'])
        # Getting the value of user from data. ex: user: joel
        post = Post.objects.get(pk=data['post'])
        serialized = UserSerializer(instance=user)
        # Gives us the model information from the class (User)
        postSerialized = PostSerializer(instance=post)
        data['user'] = serialized.data
        # Returns user information as dictionary, retrieving the value for that particular user and finally, returning nested data
        data['post'] = postSerialized.data
        return data