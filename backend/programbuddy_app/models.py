from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class UserProfile(models.Model):
    class LanguageName(models.TextChoices):
        JAVASCRIPT = 'JavaScript'
        PYTHON = 'Python'
        JAVA = 'Java'
        CSHARP = 'C#'
        CPLUS = 'C++'
        PHP = 'PHP'
        SWIFT = 'Swift'

    class ProficiencyLevel(models.TextChoices):
        ADVANCED = 'Advanced'
        INTERMEDIATE = 'Intermediate'
        BEGINNER = 'Beginner'

    class Gender(models.TextChoices):
        FEMALE = 'Female'
        MALE = 'Male'
        PREF = 'Prefer not to say'

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profiles", primary_key=True)
    about = models.TextField(null=True, blank=True)
    profile_pic = models.URLField(max_length=300, null=True, blank=True, default='https://res.cloudinary.com/dbi5z0la5/image/upload/v1650772943/my-uploads/kkievty6jz98l7pg7sez.png')
    gender = models.CharField(max_length=20, choices=Gender.choices, default=Gender.PREF)
    language = models.CharField(max_length=20, choices=LanguageName.choices, default=LanguageName.JAVASCRIPT)
    proficiency = models.CharField(max_length=20, choices=ProficiencyLevel.choices, default=ProficiencyLevel.BEGINNER)

    def __str__(self):
        return f"User: {self.user}, Language: {self.language}, Gender: {self.gender}"

class Forum(models.Model):
    forum_title = models.CharField(max_length=255)
    forum_description = models.TextField(blank=True)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"Title: {self.forum_title}, Description: {self.forum_description}, Value: {self.value}"

class Post(models.Model):
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE, related_name="posts")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    post_title = models.CharField(max_length=255)
    post_description = models.TextField()
    post_date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Title: {self.post_title}, Description: {self.post_description}, User: {self.user}"

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")
    comment_description = models.TextField()
    comment_date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Description: {self.comment_description}, User: {self.user}"