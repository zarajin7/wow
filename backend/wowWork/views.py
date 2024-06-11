from django.shortcuts import render


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Donation, Activity
from .serializers import DonationSerializer, ActivitySerializer
# Create your views here.
# donations/

class DonationAPIView(APIView):
    def get(self, request, format=None):
        donations = Donation.objects.all()
        serializer = DonationSerializer(donations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# activities/

class ActivityAPIView(APIView):
    def get(self, request, format=None):
        activities = Activity.objects.all()
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ActivityDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Activity.objects.get(id=id)
        except Activity.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        activity = self.get_object(id)
        serializer = ActivitySerializer(activity)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        activity = self.get_object(id)
        serializer = ActivitySerializer(activity, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        activity = self.get_object(id)
        activity.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

