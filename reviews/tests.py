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
        print(len(response.data))

    def test_can_list_reviews(self):
        movie = Movie.objects.get(title='movie')
        ben = User.objects.get(username='ben')
        Review.objects.create(owner=ben, movie=movie, content='a review', rating=3)
        response = self.client.get('/reviews/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(len(response.data))

    def test_logged_in_user_can_create_review(self):
        movie = Movie.objects.get(title='movie')
        self.client.login(username='ben', password='pass')
        response = self.client.post('/reviews/', {'movie': [1], 'content': ['a review'], 'rating': [3]})
        count = Review.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_review(self):
        movie = Movie.objects.get(title='movie')
        response = self.client.post('/reviews/', {'movie': [1], 'content': ['a review'], 'rating': 3})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

class ReviewDetailViewTests(APITestCase):
    def setUp(self):
        ben = User.objects.create_user(username='ben', password='pass')
        olga = User.objects.create_user(username='olga', password='pass')
        Movie.objects.create(title='movie', year='2012-06-15', director='Steve', genre='thriller', actors='terry, bob, joan', image='https://res.cloudinary.com/djxclxygo/image/upload/v1/clapper_board_vector_oi5zxv')
        
        Review.objects.create(
            owner=ben, content='bens review', movie = Movie.objects.get(title='movie'), rating=3
        )
        Review.objects.create(
            owner=olga, content='olgas review', movie = Movie.objects.get(title='movie'), rating=1
        )

    def test_can_retrieve_review_using_valid_id(self):
        response = self.client.get('/reviews/1')
        self.assertEqual(response.data['content'], 'bens review')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_review_using_invalid_id(self):
        response = self.client.get('/reviews/999')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_can_update_own_review(self):
        self.client.login(username='ben', password='pass')
        response = self.client.put('/reviews/1', {'movie': [1], 'content': ['bens updated review'], 'rating': 3})
        review = Review.objects.filter(pk=1).first()
        self.assertEqual(review.content, 'bens updated review')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_cant_update_another_users_review(self):
        self.client.login(username='ben', password='pass')
        response = self.client.put('/reviews/2', {'movie': [1], 'content': ['bens updated review'], 'rating': 3})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)