//创建获取位置实例
var geolocation = new BMapGL.Geolocation()
geolocation.enableSDKLocation()

document.getElementById("map").innerHTML

//如果在地图上并按下，取消changeplace
document.getElementById("detector").addEventListener('onmousedown', function() {
    document.getElementById("status").innerText = "True"
})
document.getElementById("detector").addEventListener('onmouseup', function() {
    document.getElementById("status").innerText = "False"
    setTimeout(changeplace, 5000)
})
/*map.addEventListener('click', function(e) {
    var pt = e.latlng
    var marker = BMapGL.Marker(pt)
    map.addOverlay(marker)
})*/

function changeplace() {
    if (document.getElementById("status").innerText == "True") {
        return
    }
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            map.centerAndZoom(r.point)
            setTimeout(changeplace, 1000)
        }
    })
}
changeplace()
