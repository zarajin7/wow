from django.db import models

# Create your models here.
# donations/

class Donation(models.Model):
    ONE_TIME = 'One-Time'
    MONTHLY = 'Monthly'
    YEARLY = 'Yearly'
    DONATION_TYPE_CHOICES = [
        (ONE_TIME, 'One-Time'),
        (MONTHLY, 'Monthly'),
        (YEARLY, 'Yearly'),
    ]

    FOOD_AID = 'Food Aid'
    SCHOLARSHIP = 'Scholarship'
    MEDICAL_SUPPORT = 'Medical Support'
    COMMUNITY_PROGRAMS = 'Community Programs'
    PURPOSE_CHOICES = [
        (FOOD_AID, 'Food Aid'),
        (SCHOLARSHIP, 'Scholarship'),
        (MEDICAL_SUPPORT, 'Medical Support'),
        (COMMUNITY_PROGRAMS, 'Community Programs'),
    ]

    amount = models.DecimalField(max_digits=10, decimal_places=2)
    donation_type = models.CharField(max_length=10, choices=DONATION_TYPE_CHOICES)
    purpose = models.CharField(max_length=20, choices=PURPOSE_CHOICES)
    cover_fees = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self, **extra_fields):
        return f"{self.amount} USD for {self.purpose} ({self.donation_type})"


# activities/

from django.db import models

class Activity(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self, **extra_fields):
        return self.title

#Testimonials
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    image = models.URLField(max_length=200)
    message = models.TextField()

    def __str__(self, **extra_fields):
        return self.name


