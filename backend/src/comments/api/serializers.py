from django.db import models
from django.db.models import fields
from rest_framework import serializers
from comments.models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("id","content")

    