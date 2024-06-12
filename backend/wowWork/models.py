from django.db import models

# Create your models here.

class Login(models.Model):
    firstname=models.CharField(max_length=245)
    lastname=models.CharField(max_length=255)
    email=models.EmailField(max_length=254,unique=True,null=True)
    phonenumber=models.IntegerField(unique=True)
   
   



    def __str__(self):
        return (self.firstName+" "+self.lastName) 
