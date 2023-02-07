from django.http import HttpResponse
from login_model.models import LoginModel
from random import randint

from . import support
from . import classes
from . import variables

def register(request):
    allinfo = list(LoginModel.objects.all())
    allname = [i.name for i in allinfo]
    alltel = [i.tel for i in allinfo]
    allid = [i.id for i in allinfo]
    name = request.GET.get('name')
    password = request.GET.get('password')
    tel = request.GET.get('tel')
    code = request.GET.get('code')
    result = variables.verification_dict[tel].verificate(code)
    support.output(f"verification\t{tel}\t{result}")

    if result:
        new_id = randint(10000, 99999)
        while new_id in allid:
            new_id = randint(10000, 99999)
        if name not in allname and tel not in alltel:
            t = LoginModel(name=name, password=password, id=new_id, tel=tel)
            t.save()
            support.output(f"register\t{new_id}\t{name}\t{password}\tsuccess")
            return HttpResponse("True")
    
    support.output(f"register\t{name}\t{password}\tfalse")
    return HttpResponse("False")

def login(request):
    allinfo = list(LoginModel.objects.all())
    name = request.GET.get('name')
    password = request.GET.get('password')
    for i in allinfo:
        if i.name == name and i.password == password:
            support.output(f"login\t{name}\t{password}\tsuccess")
            return HttpResponse("True")
    support.output(f"login\t{name}\t{password}\tfalse")
    return HttpResponse("False")

def verification_getcode(request):
    tel = request.GET.get("tel")
    variables.verification_dict[tel] = (classes.verification_code(tel))
    ve = variables.verification_dict[tel]
    ve.send()
    return HttpResponse("True")
