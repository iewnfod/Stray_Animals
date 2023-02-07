#初始化mysql数据库
import pymysql
pymysql.install_as_MySQLdb()

#初始化变量库
from . import variables
variables.verification_dict = {}
