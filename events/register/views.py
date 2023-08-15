from django.shortcuts import render,redirect,HttpResponse,HttpResponseRedirect
from register.models import *
from django import forms
from register.forms import *

# Create your views here.
def home(request):
    if request.method=='POST':
        form=RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("hallehuyah!!! you have sucessfully registered")
    else:
        form=RegisterForm()
        data={
            'form':form,
         
        }
    return render(request,"home.html",data )

def events(request):
    post=Register.objects.all()
    if request.method=='POST':
        form=RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("hallehuyah!!! you have sucessfully registered")
    else:
        form=RegisterForm()
        data={
            'form':form,
            'post':post
         
        }
    return render(request,"events.html",data)

