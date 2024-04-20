from django.shortcuts import render
from rest_framework import generics, status
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import *

# Create your views here.
#USER VIEWS
class GetUsers(APIView):
    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GetUserByID(APIView):
    def get(self, request, id, format=None):
        try:
            user = User.objects.get(pk=id)
            serializer = UserSerializer(user)
        except User.DoesNotExist:
            return Response({'Message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.data, status=status.HTTP_200_OK)

    
class AddUser(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'Message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class DeleteUser(APIView):
    def delete(self, request, id, format=None):
        try:
            user = User.objects.get(pk=id)
        except User.DoesNotExist:
            return Response({'Message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

        user.delete()
        return Response({'Message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    
class EditUser(APIView):
    def put(self, request, id, format=None):
        try:
            user = User.objects.get(pk=id)
        except User.DoesNotExist:
            return Response({'Message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#NIGHT VIEWS
class GetNights(APIView):
    def get(self, request, format=None):
        nights = Night.objects.all()
        serializer = NightSerializer(nights, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GetNightByID(APIView):
    def get(self, request, id, format=None):
        try:
            night = Night.objects.get(pk=id)
            serializer = NightSerializer(night)
        except Night.DoesNotExist:
            return Response({'Message': 'Night does not exist'}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
class AddNight(APIView):
    def post(self, request, format=None):
        serializer = NightSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'Message': 'Night created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EditNight(APIView):
    def put(self, request, id, format=None):
        try:
            night = Night.objects.get(pk=id)
        except Night.DoesNotExist:
            return Response({'Message': 'Night does not exist'}, status=status.HTTP_404_NOT_FOUND)

        serializer = NightSerializer(night, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
#USER NIGHT
class GetUserNights(APIView):
    def get(self, request, format=None):
        usernights = UserNight.objects.all()
        serializer = UserNightSerializer(usernights, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GetUserNightsByUserID(APIView):
    def get(self, request, id, format=None):
        try:
            usernights = UserNight.objects.filter(user=id)
            serializer = UserNightSerializer(usernights, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except UserNight.DoesNotExist:
            return Response({'Message': 'UserNight does not exist'}, status=status.HTTP_404_NOT_FOUND)

    
class AddUserNight(APIView):
    def post(self, request, format=None):
        serializer = UserNightSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'Message': 'User night created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class EditUserNight(APIView):
    def put(self, request, id, format=None):
        try:
            usernight = UserNight.objects.get(pk=id)
        except UserNight.DoesNotExist:
            return Response({'Message': 'UserNight does not exist'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserNightSerializer(usernight, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DeleteUserNight(APIView):
    def delete(self, request, id, format=None):
        try:
            usernight = UserNight.objects.get(pk=id)
        except UserNight.DoesNotExist:
            return Response({'Message': 'UserNight does not exist'}, status=status.HTTP_404_NOT_FOUND)

        usernight.delete()
        return Response({'Message': 'UserNight deleted successfully'}, status=status.HTTP_204_NO_CONTENT)