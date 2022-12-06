function GetHttpRequest(url, storeInfoElementId) {
    //向指定url发送请求
    let xhr = new XMLHttpRequest()
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
    let el = document.getElementById(storeInfoElementId)
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
    let temp = document.createElement('form')
    temp.action = url
    temp.method = 'post'
    temp.style.display = 'none'
    let file = document.createElement('textarea')
    file.name = 'file'
    file.value = binaryString
    let file_name = document.createElement('textarea')
    file_name.value = fileName
    temp.appendChild(file)
    temp.appendChild(file_name)
    document.body.appendChild(temp)
    temp.submit()
    return temp
}

function upload(file, target_url) {
    let up = new XMLHttpRequest()
    up.onloadstart = function () {
        console.log("Start upload")
    }
    up.onprogress = function (e) {
        let percent = e.loaded / e.total
        console.log(percent)
    }
    up.onloadend = function () {
        console.log("Upload finish")
    }
    up.onload = function () {
        console.log("Upload successfully")
    }
    up.onerror = function () {
        console.log("Upload enters an error")
    }
    up.ontimeout = function () {
        console.log("Upload time out")
    }
}


function PostHttpRequest(url, values) {
    let temp = document.createElement('form')
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
    let s = document.createElement('script')
    s.src = 'https://pv.sohu.com/cityjson?ie=utf-8'
    document.body.appendChild(s)
    return returnCitySN["cip"]
}

function getCurrentLocation() {
    let latitude = document.createElement('span')
    latitude.id = 'latitude'
    latitude.style.display = 'none'

    let longitude = document.createElement('span')
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
    let name = key + '='
    let cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i ++) {
        let c = cookies[i].trim()
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return undefined
}

function removeCookie(key) {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    let value = getCookie(key)
    if (value !== undefined) {
        document.cookie = key + "=" + value + ";expires=" + exp.toGMTString()
    }
}

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&")
    for (let i=0; i<vars.length; i++) {
        let pair = vars[i].split("=")
        if(pair[0] === variable){
            return pair[1]
        }
    }
    return undefined
}

// 特殊效果
function message(info) {
    let message_box = document.createElement('div')
    message_box.className = 'message_box'

    let message_content = document.createElement('span')
    message_content.innerText = info
    message_box.append(message_content)

    document.body.append(message_box)

    setTimeout(function () {
        message_box.remove()
    }, 10000)
}

// 随机数
function random(minNum, maxNum) {
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10)
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10)
        default:
            return 0
    }
}
