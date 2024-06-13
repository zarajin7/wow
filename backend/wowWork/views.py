from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import login
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from .models import Donation, Activity,CustomUser,Testimonial
from .serializers import  RegistrationSerializer, DonationSerializer, ActivitySerializer, LoginSerializer,TestimonialSerializer
# Create your views here. 

class RegistrationView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user': RegistrationSerializer(user).data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
  
    def post(self,request,format=None):
        serializer=LoginSerializer(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data.get('email')
            password=serializer.validated_data.get('password')
            print(email)
            print(password)
            try:
               user= CustomUser.objects.get(email=email)
               print(user)
            except CustomUser.DoesNotExist:
               user=None 
            if user is not None:
             if check_password(password,user.password):
                refresh=RefreshToken.for_user(user)
                access_token=refresh.access_token
                login(request,user)
                return Response({'refresh_token':str(refresh),'access_token':str(access_token)},status=status.HTTP_200_OK)
             else:
                 return Response({'message':'Password Error'},status=status.HTTP_401_UNAUTHORIZED)
            else:
               return Response({'message':'User Does not exist'},status=status.HTTP_400_BAD_REQUEST)
        else:
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DonationAPIView(APIView):
    def get(self, request, format=None, **extra_kwargs):
        donations = Donation.objects.all()
        serializer = DonationSerializer(donations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None, **extra_kwargs):
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActivityAPIView(APIView):
    def get(self, request, format=None, **extra_kwargs):
        activities = Activity.objects.all()
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data)

    def post(self, request, format=None, **extra_kwargs):
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActivityDetailAPIView(APIView):
    def get_object(self, id, **extra_kwargs):
        try:
            return Activity.objects.get(id=id)
        except Activity.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None, **extra_kwargs):
        activity = self.get_object(id)
        serializer = ActivitySerializer(activity)
        return Response(serializer.data)

    def put(self, request, id, format=None, **extra_kwargs):
        activity = self.get_object(id)
        serializer = ActivitySerializer(activity, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None, **extra_kwargs):
        activity = self.get_object(id)
        activity.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TestimonialAPIView(APIView):
    def get(self, request, format=None, **extra_kwargs):
        testimonials = Testimonial.objects.all()
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)

    def post(self, request, format=None, **extra_kwargs):
        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TestimonialDetailAPIView(APIView):
    def get_object(self, id, **extra_kwargs):
        try:
            return Testimonial.objects.get(id=id)
        except Testimonial.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None, **extra_kwargs):
        testimonial = self.get_object(id)
        serializer = TestimonialSerializer(testimonial)
        return Response(serializer.data)

    def put(self, request, id, format=None, **extra_kwargs):
        testimonial = self.get_object(id)
        serializer = TestimonialSerializer(testimonial, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None, **extra_kwargs):
        testimonial = self.get_object(id)
        testimonial.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
