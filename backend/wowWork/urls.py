from django.urls import path
from .views import RegistrationView, LoginView, ActivityAPIView, ActivityDetailAPIView, DonationAPIView

urlpatterns = [
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('login/', LoginView.as_view(), name='login'),
    path('activities/', ActivityAPIView.as_view(), name='activity-list'),
    path('activities/<id>/', ActivityDetailAPIView.as_view(), name='activity-detail'),
    path('donations/', DonationAPIView.as_view(), name='donation-list'),

]
