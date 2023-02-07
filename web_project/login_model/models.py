from django.db import models

# Create your models here.
class LoginModel(models.Model):
    name = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    tel = models.CharField(max_length=20)
