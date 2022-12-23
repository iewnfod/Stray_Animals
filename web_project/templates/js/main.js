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

// 添加额外信息
document.write('<link href="../css/addition.css" type="text/css" rel="stylesheet">')
document.write('<script src="../js/addition.js"></script>')


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
    try {
        add_menu()
    } catch (e) {
        console.log(e)
    }

    // 添加背景
    try {
        add_bg()
    } catch (e) {
        console.log(e)
    }

    // 刷新用户
    try {
        refresh_user()
    } catch (e) {
        console.log(e)
    }

    // login bind
    try {
        login_bind()
    } catch (e) {
        console.log(e)
    }

    // 添加动画核心
    try {
        let animation_core = document.createElement('script')
        animation_core.src = '../js/animation_core.js'
        document.head.append(animation_core)
    } catch (e) {
        console.log(e)
    }

    // 添加动画
    try {
        animation_core.onload = function () {
            // 需要等待动画核心加载完成
            let animation = document.createElement('script')
            animation.src = '../js/animation.js'
            document.head.append(animation)
        }
    } catch (e) {
        console.log(e)
    }

    // 修改搜索图片高度
    try {
        document.getElementById('search_img').style.height = document.getElementById('search_input').offsetHeight * 0.8 + 'px'
    } catch (e) {
        console.log(e)
    }

    // 监听窗口变化
    try {
        window.onresize = function () {}
    } catch (e) {
        console.log(e)
    }

    // 下雪效果
    try {
        snow()
    } catch (e) {
        console.log(e)
    }

    // 主页面 js 加载
    try {
        let file_name = window.location.href.split('/')
        file_name = file_name[file_name.length - 1]
        file_name = file_name.split('.')[0]
        let main_script = document.createElement('script')
        main_script.src = './js/' + file_name + '.js'
        document.head.append(main_script)
    } catch (e) {
        console.log(e)
    }
}

document.addEventListener('error', function (e) {
    let elem = e.target
    if (elem.tagName.toLowerCase() === 'img') {
        elem.src = '../Images/loading_error.png'
        message('图片加载出错啦～')
    }
}, true)
