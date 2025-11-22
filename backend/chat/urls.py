from django.urls import path
from .views import send_message, get_historic

urlpatterns = [
    path("messages/", send_message),
    path("historic/<str:user>/", get_historic),
]
