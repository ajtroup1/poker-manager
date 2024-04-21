from django.urls import path
from .views import *

urlpatterns = [
    #users
    path('users', GetUsers.as_view()),
    path('user/<int:id>', GetUserByID.as_view()),
    path('add-user', AddUser.as_view()),
    path('delete-user/<int:id>', DeleteUser.as_view()),
    path('edit-user/<int:id>', EditUser.as_view()),
    #nights
    path('nights', GetNights.as_view()),
    path('night/<int:id>', GetNightByID.as_view()),
    path('add-night', AddNight.as_view()),
    path('edit-night/<int:id>', EditNight.as_view()),
    path('delete-night/<int:id>', DeleteNight.as_view()),
    #user nights
    path('usernights', GetUserNights.as_view()),
    path('usernights-by-user/<int:id>', GetUserNightsByUserID.as_view()),
    path('add-usernight', AddUserNight.as_view()),
    path('edit-usernight/<int:id>', EditUserNight.as_view()),
    path('delete-usernight/<int:id>', DeleteUserNight.as_view()),
    #admin
    path('admin', GetAdmin.as_view()),
    path('add-admin', AddAdmin.as_view()),
    path('edit-admin/<int:id>', EditAdmin.as_view()),
]
