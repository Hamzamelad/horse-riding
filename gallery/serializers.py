from rest_framework import serializers
from .models import Media


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ["id", "title","pup_date", "img", "video"]


class MediaArSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()

    class Meta:
        model = Media
        fields = ["id", "title","pup_date", "img", "video"]

    def get_title(self, obj):
        return obj.ar_title
