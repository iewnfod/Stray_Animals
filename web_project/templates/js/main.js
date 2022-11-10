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
