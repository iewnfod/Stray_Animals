function GetHttpRequest(url, storeInfoElementId) {
    //向指定url发送请求
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                document.getElementById(storeInfoElementId).innerText = xhr.responseText
            }
        }
    }
    try {
        xhr.open('GET', url, true)
        xhr.send()
    } catch (e) {
        alert('请尝试使用edge浏览器，安装并开启cors拓展。https://microsoftedge.microsoft.com/addons/detail/cors%E8%A7%A3%E9%99%A4%E5%B0%81%E9%94%81/jcpnfhmgopmjcnofcgplmhkgeicmbhli?hl=zh-CN')
    }
}

function getInfoFromElement(storeInfoElementId, action, args) {
    var el = document.getElementById(storeInfoElementId)
    console.log(el)
    if (el.innerText !== '') {
        let innertext = el.innerText
        // el.innerText = ''
        console.log(innertext)
        action(args)
        return innertext
    } else {
        setTimeout('getInfoFromElement', 1000, storeInfoElementId)
    }
}

function upLoadFile(fileName, binaryString) {
    let url = getCurrentUrl() + '/upload'
    var temp = document.createElement('form')
    temp.action = url
    temp.method = 'post'
    temp.style.display = 'none'
    var file = document.createElement('textarea')
    file.name = 'file'
    file.value = binaryString
    var file_name = document.createElement('textarea')
    file_name.value = fileName
    temp.appendChild(file)
    temp.appendChild(file_name)
    document.body.appendChild(temp)
    temp.submit()
    return temp
}

function PostHttpRequest(url, values) {
    var temp = document.createElement('form')
    temp.action = url
    temp.method = 'post'
    temp.style.display = 'none'

    for (var i in values) {
        var obj = document.createElement('textarea')
        obj.name = i
        obj.value = values[i]
        temp.appendChild(obj)
    }

    document.body.appendChild(temp)
    temp.submit()

    return temp
}

function getIP() {
    var s = document.createElement('script')
    s.src = 'https://pv.sohu.com/cityjson?ie=utf-8'
    document.body.appendChild(s)
    return returnCitySN["cip"]
}

function getCurrentLocation() {
    var latitude = document.createElement('span')
    latitude.id = 'latitude'
    latitude.style.display = 'none'

    var longitude = document.createElement('span')
    longitude.id = 'longitude'
    longitude.style.display = 'none'

    document.body.appendChild(latitude)
    document.body.appendChild(longitude)

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.longitude, position.coords.latitude)
            latitude.innerText = position.coords.latitude.toString()
            longitude.innerText = position.coords.longitude.toString()
        });
    }
}

function change_lang(current_lang, target_lang) {
    let current_url = window.location.href.split('cn')
    window.location.href = '../' + target_lang + current_url[current_url.length-1]
}

function getElementByIdAndName(id, name) {
    let arr = document.getElementsByName(name)
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].id === id) {
            return arr[i]
        }
    }
}


// cookies

function getCookie(key) {
    var name = key + '='
    var cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i ++) {
        let c = cookies[i].trim()
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return undefined
}

function removeCookie(key) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var value = getCookie(key)
    if (value !== undefined) {
        document.cookie = key + "=" + value + ";expires=" + exp.toGMTString()
    }
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&")
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split("=")
        if(pair[0] == variable){
            return pair[1]
        }
    }
    return undefined
}
