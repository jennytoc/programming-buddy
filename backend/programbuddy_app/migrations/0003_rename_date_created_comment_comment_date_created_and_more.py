# Generated by Django 4.0.2 on 2022-04-19 00:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('programbuddy_app', '0002_forum_value'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='date_created',
            new_name='comment_date_created',
        ),
        migrations.RenameField(
            model_name='comment',
            old_name='description',
            new_name='comment_description',
        ),
        migrations.RenameField(
            model_name='forum',
            old_name='description',
            new_name='forum_description',
        ),
        migrations.RenameField(
            model_name='forum',
            old_name='title',
            new_name='forum_title',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='date_created',
            new_name='post_date_created',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='description',
            new_name='post_description',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='title',
            new_name='post_title',
        ),
    ]