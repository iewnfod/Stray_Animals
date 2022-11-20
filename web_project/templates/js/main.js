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

window.onload = function () {
    // let login_frame = document.createElement('iframe')
    // login_frame.src = './templates.html'
    // login_frame.id = 'templates'
    // login_frame.className = 'login_template'
    // document.body.append(login_frame)
    // let temp = document.createElement('script')
    // temp.src = './js/templates.js'
    // document.body.append(temp)

    // 添加菜单
    add_menu()

    // 添加背景
    add_bg()

    // after all
    after_all()

    refresh_user()
}
