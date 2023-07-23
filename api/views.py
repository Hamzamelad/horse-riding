from rest_framework import generics
from news.models import News
from news.serializers import NewsSerializer, NewsAeSeraializer
from gallery.models import Media
from gallery.serializers import MediaSerializer, MediaArSerializer


# Create your views here.
class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()

    # def get_queryset(self):
    #     limit = int(self.request.GET.get("limit"))
    #     return Post.objects.filter(CATEGORY=self.request.GET.get("category")).order_by('-pup_date')[:limit]

    def get_serializer_class(self):
        if self.request.GET.get("lang") == "ar":
            return NewsAeSeraializer
        return NewsSerializer

class NewsDetailsView(generics.RetrieveAPIView):
    queryset = News.objects.all()

    def get_serializer_class(self):
        if self.request.GET.get("lang") == "ar":
            return NewsAeSeraializer
        return NewsSerializer


class GalleryListView(generics.ListAPIView):
    queryset = Media.objects.all()

    def get_serializer_class(self):
        if self.request.GET.get("lang") == "ar":
            return MediaArSerializer
        return MediaSerializer
