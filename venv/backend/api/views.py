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
    
class AddUser(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        
        # Validate the data
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