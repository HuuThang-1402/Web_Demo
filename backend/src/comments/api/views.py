from comments.models import Comment
from .serializers import CommentSerializer


from rest_framework import viewsets
class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


