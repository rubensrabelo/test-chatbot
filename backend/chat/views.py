from rest_framework.response import Response
from rest_framework.decorators import api_view
from .services import create_user_message, get_messages_by_user
from .serializers import MessageSerializer


@api_view(['POST'])
def send_message(request):
    user = request.data.get("user")
    message = request.data.get("content")

    message = create_user_message(user, message)
    return Response(MessageSerializer(message).data)


@api_view(['GET'])
def get_historic(request, user):
    messages = get_messages_by_user(user)
    return Response(MessageSerializer(messages, many=True).data)
