# Generated by Django 4.2.3 on 2023-07-19 12:00

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("gallery", "0002_alter_media_video"),
    ]

    operations = [
        migrations.AlterField(
            model_name="media",
            name="img",
            field=models.ImageField(blank=True, null=True, upload_to="gallery/images/"),
        ),
    ]
