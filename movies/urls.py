from django.urls import path
from movies import views

urlpatterns = [
    path('movies/', views.MovieList.as_view()),
    path('movies/add/', views.MovieCreate.as_view()),
    path('movies/<int:pk>', views.MovieDetail.as_view()),
]
