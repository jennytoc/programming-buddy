from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profiles", primary_key=True)
    about = models.TextField()

    def __str__(self):
        return f"User: {self.user}"

class Language(models.Model):
    class LanguageName(models.TextChoices):
        JAVASCRIPT = 'JS', _('JavaScript')
        PYTHON = 'PY', _('Python')
        JAVA = 'JV', _('Java')
        CSHARP = 'CS', _('C#')
        CPLUS = 'CP', _('C++')
        PHP = 'PH', _('PHP')
        SWIFT = 'SW', _('Swift')

    class ProficiencyLevel(models.TextChoices):
        ADVANCED = 'ADV', _('Advanced')
        INTERMEDIATE = 'INT', _('Intermediate')
        BEGINNER = 'BEG', _('Beginner')

    language = models.CharField(max_length=2, choices=LanguageName.choices, default=LanguageName.JAVASCRIPT)
    proficiency = models.CharField(max_length=3, choices=ProficiencyLevel.choices, default=ProficiencyLevel.BEGINNER)
    user = models.ManyToManyField(User)

    def __str__(self):
        return f"Language: {self.language}, Proficiency: {self.proficiency}, User: {self.user}"

class Forum(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"Title: {self.title}, Description: {self.description}, Value: {self.value}"

class Post(models.Model):
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE, related_name="posts")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    title = models.CharField(max_length=255)
    description = models.TextField()
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Title: {self.title}, Description: {self.description}, User: {self.user}"

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")
    description = models.TextField()
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Description: {self.description}, User: {self.user}"