//创建地图实例
var map = new BMapGL.Map("container")
//初始化地图，并设置中心坐标点以及地图级别
map.centerAndZoom(new BMapGL.Point(0, 0), 11)
//开启鼠标滚轮缩放
map.enableScrollWheelZoom(true)
