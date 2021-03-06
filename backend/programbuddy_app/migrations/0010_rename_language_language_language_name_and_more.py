# Generated by Django 4.0.2 on 2022-04-23 19:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('programbuddy_app', '0009_alter_userprofile_profile_pic'),
    ]

    operations = [
        migrations.RenameField(
            model_name='language',
            old_name='language',
            new_name='language_name',
        ),
        migrations.RemoveField(
            model_name='language',
            name='user_profile',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='language',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to='programbuddy_app.language'),
        ),
    ]
