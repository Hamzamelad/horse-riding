# Generated by Django 4.2.3 on 2023-07-19 10:28

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="News",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=500)),
                ("ar_title", models.CharField(max_length=500)),
                ("overview", models.CharField(max_length=500)),
                ("ar_overview", models.CharField(max_length=500)),
                ("content", models.TextField()),
                ("ar_content", models.TextField()),
                ("pup_date", models.DateField()),
                ("img", models.ImageField(blank=True, null=True, upload_to="images/")),
            ],
        ),
    ]