from django.urls import path
from .views import *

urlpatterns = [
    path('users', GetUsers.as_view()),
    path('add-user', AddUser.as_view()),
    path('delete-user/<int:id>', DeleteUser.as_view()),
    path('edit-user/<int:id>', EditUser.as_view())
]
