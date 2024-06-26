from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=255, blank=True)
    year = models.DateField(auto_now=False, auto_now_add=False)
    director = models.CharField(max_length=255, blank=True)
    genre = models.CharField(max_length=255, blank=True)
    actors = models.CharField(max_length=255, blank=True)
    image = models.ImageField(
        upload_to='images/', default='../clapper_board_vector_oi5zxv'
    )

    class Meta:
        ordering = ['-year']

    def __str__(self):
        return f'{self.title}'