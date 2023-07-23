from django.db import models
from django.core.validators import FileExtensionValidator


# Create your models here.
class Media(models.Model):
    title = models.CharField(max_length=700)
    ar_title = models.CharField(max_length=700)
    pup_date = models.DateField(auto_now_add=True)
    img = models.ImageField(upload_to="gallery/images/", null=True, blank=True)
    video = models.FileField(
        upload_to="galley/videos/",
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=["MOV", "avi", "mp4", "webm", "mkv"]
            )
        ],
    )
