from django.forms import ValidationError
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

    def is_valid(self, raise_exception=False):
        return_value = super().is_valid(raise_exception)
        if(self.instance.user != self.context['request'].user):
            raise ValidationError({"error" : "unable to edit"})
        return return_value

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'

    # this function takes in an obj instance and returns a primitive representation (like dict)
    def to_representation(self, instance): 
        data = super().to_representation(instance) 
        user = User.objects.get(pk=data['user'])
        post = Post.objects.get(pk=data['post'])
        serialized = UserSerializer(instance=user)
        postSerialized = PostSerializer(instance=post)
        data['user'] = serialized.data
        data['post'] = postSerialized.data
        return data