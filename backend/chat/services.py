from .models import Message


def create_user_message(user, content):
    answer = "Obrigado por seu contato. Em breve responderemos."

    return Message.objects.create(
        user=user,
        content=content,
        answer=answer
    )


def get_messages_by_user(user):
    return Message.objects.filter(user=user).order_by("created_at")
