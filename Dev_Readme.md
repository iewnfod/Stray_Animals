配置环境:
1. 安装Python 
2. 安装Pycharm 
3. 安装django
4. 安装git，配置git通过github访问Stry_Animals项目。
5. 数据库使用pycharm中自带的sqlite3数据库
    - 由于sqlite是文件数据库，修改后直接存储在github上，本地不需要安装数据库。进需要在pycharm环境中对数据库进行连接
    - 具体连接方式是：
    - 在pycharm中安装plugin插件  DB Navigator，安装后，点击菜单上此选项，然后选择左上角“+”添加在项目中的
    - db.sqlite3作为连接的数据库文件。


初始访问：
1. 环境搭建好后，在Terminal中通过 python manage.py runserver 启动 http服务
2. 通过 http://127.0.0.1:8000 访问默认的登录页面（index)
3. 通过 http://127.0.0.1:8000/admin 访问默认的管理页面。 用户名，密码均为 “admin”
   - 通过管理页面可以对于数据库进行数据管理，可以增删改查数据库中数据

