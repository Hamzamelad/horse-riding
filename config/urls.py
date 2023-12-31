
from django.contrib import admin
from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name='index.html'

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', IndexView.as_view(), name='home'),
    path('api/', include('api.urls'))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)