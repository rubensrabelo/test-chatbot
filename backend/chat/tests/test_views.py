from rest_framework.test import APITestCase
from django.urls import reverse
from chat.models import Message


class TestMessageViews(APITestCase):

    def test_send_message(self):
        url = reverse("send_message")

        payload = {"user": "A", "content": "Oi"}

        response = self.client.post(url, payload, format="json")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["user"], "A")
        self.assertEqual(response.data["content"], "Oi")
        self.assertIn("answer", response.data)

        self.assertEqual(Message.objects.count(), 1)

    def test_get_historic(self):
        Message.objects.create(user="A", content="Oi", answer="Ok")

        url = reverse("get_historic", args=["A"])

        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["user"], "A")
