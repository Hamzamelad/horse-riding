from rest_framework import serializers
from .models import News


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ["id", "title", "overview", "content", "pup_date", "img"]


class NewsAeSeraializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    overview = serializers.SerializerMethodField()
    content = serializers.SerializerMethodField()

    class Meta:
        model = News
        fields = ["id", "title", "overview", "content", "pup_date", "img"]

    def get_title(self, obj):
        return obj.ar_title
    
    def get_overview(self, obj):
        return obj.ar_overview

    def get_content(self, obj):
        return obj.ar_content
