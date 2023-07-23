from django.urls import path
from .views import NewsListView, NewsDetailsView, GalleryListView


urlpatterns = [
    path('news/', NewsListView.as_view(), name='news_list'),
    path('news/<int:pk>', NewsDetailsView.as_view(), name='news_list'),
    path('gallery/', GalleryListView.as_view(), name='gallery_list')
    
]
