from django.db import models
from django.contrib.auth.models import User
from reviews.models import Review

LIKE_FLAVOUR = ((0, 'heart'), (1, 'smiley face'), (2, 'thumbs up'),
(3, 'laugh'), (4, 'applause'))


class Like(models.Model):
    """
    Like model, related to 'owner' and 'review'.
    'owner' is a User instance and 'review' is a Review instance.
    'unique_together' makes sure a user can't like the same review twice.
    'flavour' is the variety of like.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(
        Review, related_name='likes', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    flavour = models.IntegerField(choices=LIKE_FLAVOUR, default=0)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'review']

    def __str__(self):
        return f'{self.owner} {self.review}'
