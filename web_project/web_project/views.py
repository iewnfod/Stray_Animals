from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def getmap(request):
    return render(request, 'map_use.html')

def main(request):
    return render(request, 'main.html')
