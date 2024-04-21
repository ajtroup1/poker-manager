from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class NightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Night
        fields = ['id', 'date', 'total_pot', 'players', 'buy_in']

class UserNightSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserNight
        fields = ['id', 'user', 'date', 'night', 'total_won', 'total_spent']

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id', 'username', 'password']