# Generated by Django 3.2.13 on 2022-04-24 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('programbuddy_app', '0014_alter_userprofile_profile_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='profile_pic',
            field=models.URLField(blank=True, default='https://res.cloudinary.com/dbi5z0la5/image/upload/v1650772943/my-uploads/kkievty6jz98l7pg7sez.png', max_length=300, null=True),
        ),
    ]
