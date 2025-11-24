from django.test import TestCase
from chat.services import create_user_message, get_messages_by_user


class TestMessageServices(TestCase):

    def test_create_user_message(self):
        msg = create_user_message(user="A", content="Olá")

        self.assertIsNotNone(msg.id)
        self.assertEqual(msg.user, "A")
        self.assertEqual(msg.content, "Olá")
        self.assertEqual(
            msg.answer,
            "Obrigado por seu contato. Em breve responderemos."
        )

    def test_get_messages_by_user(self):
        create_user_message("A", "Primeira")
        create_user_message("A", "Segunda")
        create_user_message("B", "Outra")

        result = get_messages_by_user("A")

        self.assertEqual(len(result), 2)
        self.assertEqual(result[0].user, "A")
