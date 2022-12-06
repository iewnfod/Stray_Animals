let login_window_exist = false

let templates = document.getElementById('templates').contentWindow

// login bind
function login_bind() {
    document.getElementById('login').addEventListener('click', function () {
        refresh_user()
        if (getCookie('id') === undefined) {
            if (login_window_exist === false) {
                let t = templates.document.getElementById('login_frame')
                let clone = t.content.cloneNode(true)
                document.getElementById('login_container').appendChild(clone)
                login_window_exist = true
                document.getElementById('main_container').style.opacity = '0.1'
            }
        } else {
            location.href = './person.html'
        }
    })
}

function add_menu() {
    let menu = document.createElement('div')
    menu.innerHTML = templates.document.getElementById('menu').innerHTML
    let url = location.href.split('/')
    let end = url[url.length-1].split('?')[0].split('.')[0]
    // console.log(menu)

    document.body.insertBefore(menu, document.body.children[0])

    document.getElementById(end+'Bottom').style.width = '90%'

    let menubar_items = ['index', 'interview', 'shop', 'map', 'help']
    // 添加事件
    for (let i = 0; i < menubar_items.length; i ++) {
        if (menubar_items[i] !== end) {
            document.getElementById(menubar_items[i]).addEventListener('mouseenter', function (e) {
                // console.log(e)
                let el = e.target
                document.getElementById(el.id+'Bottom').style.animation = 'showMenubarBottom .3s forwards'
            })
            document.getElementById(menubar_items[i]).addEventListener('mouseleave', function (e) {
                // console.log(e)
                let el = e.target
                document.getElementById(el.id+'Bottom').style.animation = 'removeMenubarBottom .3s forwards'
            })
        }
    }
}
