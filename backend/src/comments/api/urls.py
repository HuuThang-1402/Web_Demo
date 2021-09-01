from django.urls import path

from comments.api.views import CommentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CommentViewSet, basename='comments')
urlpatterns = router.urls