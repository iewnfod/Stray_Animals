function GetHttpResponseInfo(url, storeInfoElementId) {
    //向指定url发送请求
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                document.getElementById(storeInfoElementId).innerText = xhr.responseText
            }
        }
    }
    //获取请求结果
    var textinfo = getHttpInfoFromElement(storeInfoElementId)
    //处理请求结果
    textinfo = textinfo.search(/<body>(.|\n)*<\/body>/i)
    return textinfo.slice(6, textinfo.length-6)
}

function getHttpInfoFromElement(storeInfoElementId) {
    var el = document.getElementById(storeInfoElementId)
    if (el.innerText != '') {
        let innertext = el.innerText
        el.innerText = ''
        return innertext
    } else {
        getHttpInfoFromElement(storeInfoElementId)
    }
}

function getCurrentUrl() {
    var url = window.location.href
    url = url.split('/')
    url = url[0] + '/' + url[1] + '/' + url[2] + '/' + url[3]
    return url
}

function changelan() {
    var url = window.location.href
    url = url.split('/')
    if (url[3] == 'en') {
        url[3] = 'cn'
    } else if (url[3] == 'cn') {
        url[3] = 'en'
    }
    window.location.href = url
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
