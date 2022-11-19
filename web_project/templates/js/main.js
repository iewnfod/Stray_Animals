function refresh_user() {
    if (getCookie('loginTime') !== undefined) {
        if (getCookie('loginTime') >= new Date().getTime()) {
            if (getCookie('userimg') !== undefined) {
                document.getElementById('person_img').setAttribute('src', getCookie('userimg'))
            }
        } else {
            logout()
        }
    }
}

function logout() {
    removeCookie('userimg')
    removeCookie('id')
    removeCookie('username')
    removeCookie('loginTime')
}

function login_check() {
    refresh_user()
    if (getCookie('id') === undefined) {
        window.history.back()
    }
}

function search() {
    let value = document.getElementById('search_input').value
    console.log(value)
}

function add_bg() {
    let bg = document.createElement('div')
    bg.className = 'bg'
    document.body.append(bg)
}

// 添加背景
window.onload = function () {
    add_bg()
}
