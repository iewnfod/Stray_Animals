from random import randint
import time
import urllib.parse
import urllib.request

from . import support

class verification_code():
    def __init__(self, tel) -> None:
        self.tel = tel
    
    
    def send(self):
        self.code = randint(100000, 999999)
        self.starttime = time.time()
        support.output("code: " + str(self.code))
    
    '''
    def send(self):
        try:
            self.code = randint(100000, 999999)
            self.starttime = time.time()
            url = 'http://106.ihuyi.com/webservice/sms.php?method=Submit'
            values = {
                'account': 'C85449626', 
                'password': 'fa6c6fb18113161d8ca2c481ac861072', 
                'mobile': str(self.tel), 
                'content': f'您的验证码是：{self.code}。请不要把验证码泄露给其他人。', 
                'format': 'json'
            }

            support.output("开始发送")
            data = urllib.parse.urlencode(values).encode(encoding='UTF-8')

            req = urllib.request.Request(url, data)
            response = urllib.request.urlopen(req)
            res = response.read()
            support.output(res.decode('utf8'))
        except:
            pass
    '''
    def verificate(self, code):
        current_time = time.time()
        if current_time - self.starttime < 600000:
            if str(self.code) == code:
                return True
        return False
