import random

code_range = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
code_dict = {

}

def give_authorization_code():
    code = ''
    for _ in range(50):
        code += code_range[random.randint(0, len(code_range)-1)]
    return code

print(give_authorization_code())

def check_authorization_code(code, user_name):
    return code == code_dict[user_name] if user_name in code_dict.keys() else False
