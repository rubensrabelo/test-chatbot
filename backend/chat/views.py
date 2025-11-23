from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Message
from .serializers import MessageSerializer


@api_view(['POST'])
def send_message(request):
    user = request.data.get("user")
    content = request.data.get("content")

    answer = "Obrigado por seu contato. Em breve responderemos."

    message = Message.objects.create(
        user=user,
        content=content,
        answer=answer
    )

    return Response(MessageSerializer(message).data)


@api_view(['GET'])
def get_historic(request, user):
    messages = Message.objects.filter(user=user).order_by("created_at")
    return Response(MessageSerializer(messages, many=True).data)
