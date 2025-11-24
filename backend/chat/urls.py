from django.urls import path
from .views import send_message, get_historic

urlpatterns = [
    path("send/", send_message, name="send_message"),
    path("historic/<str:user>/", get_historic, name="get_historic"),
]
