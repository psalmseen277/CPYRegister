from django.db import models
from django.db.models import Model

# Create your models here.
competetion=[
    ('spoken word','spoken word'),
    ('bible quiz','bible quiz'),
    ('Both','Both')
]

class Register(models.Model):
    Teacher_name=models.CharField(max_length=30)
    Teacher_Number=models.CharField(max_length=50)
    Name_of_parish=models.CharField(max_length=30)
    Choice_of_competition=models.CharField(max_length=30 ,choices=competetion)


   
