
from rest_framework import serializers
from .models import Donation, Activity

# donations/serializers.py

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ['id', 'amount', 'donation_type', 'purpose', 'cover_fees', 'created_at']


# activities/serializers.py

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'title', 'description', 'image_url', 'created_at']
