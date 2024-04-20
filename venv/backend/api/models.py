from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=25, null=False)
    password = models.CharField(max_length=25, null=False)
    firstname = models.CharField(max_length=25, null=False)
    lastname = models.CharField(max_length=25, null=False)
    email = models.CharField(max_length=50, null=False)
    date_of_birth = models.DateField(default=None)
    games_attended = models.IntegerField(default=0)
    total_won = models.IntegerField(default=0)
    total_spent = models.IntegerField(default=0)
    player_class = models.CharField(max_length=25, default="Base")
    phone_number = models.CharField(max_length=25, null=False)
    favorite_hand = models.CharField(max_length=25, default="Seven Two")