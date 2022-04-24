# Generated by Django 4.0.2 on 2022-04-23 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('programbuddy_app', '0011_remove_userprofile_language_delete_language'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='language',
            field=models.CharField(choices=[('JS', 'JavaScript'), ('PY', 'Python'), ('JV', 'Java'), ('CS', 'C#'), ('CP', 'C++'), ('PH', 'PHP'), ('SW', 'Swift')], default='JS', max_length=2),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='proficiency',
            field=models.CharField(choices=[('ADV', 'Advanced'), ('INT', 'Intermediate'), ('BEG', 'Beginner')], default='BEG', max_length=3),
        ),
    ]