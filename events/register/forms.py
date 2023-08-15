from django import forms
from django.forms import ModelForm
from .models import *


class RegisterForm(forms.ModelForm):
    class Meta:
        model=Register
        fields="__all__"
        widgets = {
            'Teacher_name': forms.TextInput(attrs={'class': 'form-control','placeholder':'name'}),
            'Teacher_Number': forms.TextInput(attrs={'class': 'form-control'}),
            'Name_of_parish': forms.TextInput(attrs={'class': 'form-control','placeholder':'name'}),
            'Choice_of_competition': forms.Select(attrs={'class': 'form-control','placeholder':'services'})
        }