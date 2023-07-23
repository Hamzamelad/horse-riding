from django.db import models


# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=500)
    ar_title = models.CharField(max_length=500)
    overview = models.CharField(max_length=500)
    ar_overview = models.CharField(max_length=500)
    content = models.TextField()
    ar_content = models.TextField()
    pup_date = models.DateField(auto_now=False, auto_now_add=False)
    img = models.ImageField(upload_to="news/", null=True, blank=True)
    
