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

// 运行容易保存的函数
function run(fn, err) {
    try {
        fn();
    } catch (e) {
        if (err) {
            err(e);
        } else {
            console.log(e);
        }
    }
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
    run(add_menu)

    // 添加背景
    run(add_bg)

    // 刷新用户
    run(refresh_user)

    // login bind
    run(login_bind)

    // 加载动画
    run(function () {
        // 加载动画依赖
        let animation_core = document.createElement('script')
        animation_core.src = '../js/animation_core.js'
        document.head.append(animation_core)

        // 加载动画文件
        animation_core.onload = function () {
            // 需要等待动画核心加载完成
            let animation = document.createElement('script')
            animation.src = '../js/animation.js'
            document.head.append(animation)
        }
    })

    // 修改搜索图片高度
    run(function () {
        document.getElementById('search_img').style.height = document.getElementById('search_input').offsetHeight * 0.8 + 'px'
    })

    // 监听窗口变化
    run(function () {
        window.onresize = function () {}
    })

    // 下雪效果
    // run(snow)

    // 主页面 js 加载
    run(function () {
        let file_name = window.location.href.split('/')
        file_name = file_name[file_name.length - 1]
        file_name = file_name.split('.')[0]
        let main_script = document.createElement('script')
        main_script.src = './js/' + file_name + '.js'
        document.head.append(main_script)
    })

}

document.addEventListener('error', function (e) {
    let elem = e.target
    if (elem.tagName.toLowerCase() === 'img') {
        elem.src = '../Images/loading_error.png'
        error_message('图片加载出错啦～')
    }
}, true)
