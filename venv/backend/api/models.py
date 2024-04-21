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
    profile_url = models.CharField(max_length=999, default=None)
    favorite_hand = models.CharField(max_length=999, default="Seven Two")

class Night(models.Model):
    date = models.DateField(null=False)
    total_pot = models.IntegerField(default=0)
    players = models.IntegerField(default=0)
    buy_in = models.IntegerField(null=False)

class UserNight(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    night = models.ForeignKey(Night, on_delete=models.CASCADE)
    date = models.DateField(null=False)
    total_won = models.IntegerField(default=0)
    total_spent = models.IntegerField(default=0)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if not self.total_spent:
            self.total_spent = self.night.buy_in if self.night else 0

class Admin(models.Model):
    username = models.CharField(max_length=50, null=False)
    password = models.CharField(max_length=50, null=False)
    