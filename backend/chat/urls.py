from django.urls import path
from .views import send_message, get_historic

urlpatterns = [
    path("messages/", send_message),
    path("messages/<str:user>/", get_historic),
]
