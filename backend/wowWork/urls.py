from django.urls import path



from .views import RegistrationView, LoginView, ActivityAPIView, ActivityDetailAPIView, DonationAPIView,TestimonialAPIView, CampaignListView, DonationCreateView


urlpatterns = [
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('login/', LoginView.as_view(), name='login'),
    path('activities/', ActivityAPIView.as_view(), name='activity-list'),
    path('activities/<id>/', ActivityDetailAPIView.as_view(), name='activity-detail'),
    path('campaigns/', CampaignListView.as_view(), name='campaign-list'),
    path('donations/', DonationCreateView.as_view(), name='donation-create'),
    path('donations/', DonationAPIView.as_view(), name='donation-list'),
    path('testimonials/', TestimonialAPIView.as_view(), name='testimony-list'),


]

