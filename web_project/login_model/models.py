from django.db import models

# Create your models here.
class LoginModel(models.Model):
    name = models.CharField(max_length=20,default='haha')
    password = models.CharField(max_length=20,default='haha')
    tel = models.CharField(max_length=20,default='haha')
    addr = models.CharField(max_length=20,default='haha')
