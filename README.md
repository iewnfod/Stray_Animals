# 主题
流浪动物

菜单栏
1. 采访，报道
2. 商城
   1. 服装
   2. 口粮

3. map
4. 领养
   1. 信息
   2. 登记并安排

---

# 平台使用
1. 地图：高德地图
2. 验证码：互亿无限

---

# 全部接口
https://.../{cn/en}/{main/interview/shop/map/help}.html
1. /index.html 主入口
2. /interview.html 所有采访页面
3. /shop.html 商城
4. /map.html 地图
5. /help.html 领养与帮助
...

* ./getUserData?name=... --> {id: ...; username: ...; userimg: ...}
* ./getPetData?id=... --> {id: ...; name: ...; img: ...; ...}

---

# Cookie

## Potential Cookies
id: 
username: 
userimg: 
loginTime: 

---

# 更多工具

* 获取百度坐标: https://api.map.baidu.com/lbsapi/getpoint/index.html

* 测试: anywhere (安装 node.js; MacOS/Linux:[sudo npm install anywhere -g] Windows:自己查吧!!!)

* 高德地图: https://lbs.amap.com/api/javascript-api/summary

---

部分参考资料：
1. sqlite for django: https://blog.csdn.net/Gu_amber/article/details/122531578
2. 在pycharm中添加 db navigator 插件
