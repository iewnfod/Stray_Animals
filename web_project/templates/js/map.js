var all_markers = {}
var zoom = 20

function change_location(longitude, latitude) {
    AMap.convertFrom([longitude, latitude], 'gcj02', function (status, result) {
        if (result.info === 'ok') {
            var lnglats = result.locations
            map.setCenter(lnglats[0])
            map.setZoom(zoom)
        }
    })
}

function add_point(x, y, id) {
    var marker = new AMap.Marker({
        position: [x, y]
    })
    map.add(marker)
    all_markers[id] = marker
}
