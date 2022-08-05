"""web_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from . import views, login_db

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.index), 

    path('map/', views.getmap), 
    path('map', views.getmap), 

    path('login/register/', login_db.register), 
    path('login/login/', login_db.login), 

    path('main/', views.main), 

    path('verification/tel/getcode/', login_db.verification_getcode), 
]
