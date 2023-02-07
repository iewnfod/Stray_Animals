from django.shortcuts import render

def map_function(request):
    return render(request, "js/map_function.js", "test/javascript")
