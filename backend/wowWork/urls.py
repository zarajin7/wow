from django.urls import path
from .views import ActivityAPIView, ActivityDetailAPIView, DonationAPIView

urlpatterns = [
    path('activities/', ActivityAPIView.as_view(), name='activity-list-create'),
    path('activities/<id>/', ActivityDetailAPIView.as_view(), name='activity-detail'),
    path('donations/', DonationAPIView.as_view(), name='donation-list-create'),

]
