function getUserData(username) {
    httpResponse = new XMLHttpRequest()
    httpResponse.open('GET', './getUserData?name='+username, true)
    httpResponse.send(null)

    httpResponse.onreadystatechange = function () {
        if (httpResponse.readyState === 4 && httpResponse.status === 200) {
            document.cookie = httpResponse.responseText.substring(1, httpResponse.responseText.length - 1)
        }
    }
}
