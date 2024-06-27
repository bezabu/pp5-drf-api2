from django.urls import path
from reviews import views

urlpatterns = [
    path('movies/', views.MovieList.as_view()),
]