from django.contrib.auth.models import User
from .models import Review, Movie
from rest_framework import status
from rest_framework.test import APITestCase


class ReviewListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username='ben', password='pass')
        Movie.objects.create(title='movie', year='2012-06-15', director='Steve', genre='thriller', actors='terry, bob, joan', image='https://res.cloudinary.com/djxclxygo/image/upload/v1/clapper_board_vector_oi5zxv')
        

    def test_can_list_movies(self):
        ben = User.objects.get(username='ben')
        response = self.client.get('/movies/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        print(len(response.data))

    def test_can_list_reviews(self):
        movie = Movie.objects.get(title='movie')
        ben = User.objects.get(username='ben')
        Review.objects.create(owner=ben, movie=movie, content='a review', rating=3)
        response = self.client.get('/reviews/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        print(len(response.data))

    def test_logged_in_user_can_create_review(self):
        movie = Movie.objects.get(title='movie')
        self.client.login(username='ben', password='pass')
        response = self.client.post('/reviews/', {'movie': [1], 'content': ['a review'], 'rating': [3]})
        count = Review.objects.count()
        print(response.data)
        #self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_review(self):
        movie = Movie.objects.get(title='movie')
        response = self.client.post('/reviews/', {'movie': [1], 'content': ['a review'], 'rating': 3})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)