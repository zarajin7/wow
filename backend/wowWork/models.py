from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone

# Custom user manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_kwargs):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_kwargs):
        extra_kwargs.setdefault('is_staff', True)
        extra_kwargs.setdefault('is_superuser', True)

        if extra_kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff set to True')
        
        if extra_kwargs.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser set to True')

        return self.create_user(email, password, **extra_kwargs)

# Custom user model
class CustomUser(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

# Donation model
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

    def __str__(self):
        return f"{self.amount} USD for {self.purpose} ({self.donation_type})"

# Activity model
class Activity(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Campaign(models.Model):
    name = models.CharField(max_length=255)
    target = models.DecimalField(max_digits=10, decimal_places=2)
    collected = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()

    def __str__(self):
        return self.name        

class Donation(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    donation_type = models.CharField(max_length=50, choices=[('One-Time', 'One-Time'), ('Monthly', 'Monthly'), ('Yearly', 'Yearly')])
    purpose = models.CharField(max_length=255)
    cover_fees = models.BooleanField(default=False)
    campaign = models.ForeignKey(Campaign, related_name='donations', on_delete=models.CASCADE)
    def __str__(self):
        return f"Donation of ${self.amount} to {self.campaign.name}"

# Testimonial model
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    image = models.URLField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.name




