from django.db import models


class Message(models.Model):
    user = models.CharField(max_length=1)
    text = models.TextField()
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.usuario}: {self.texto[:20]}"
