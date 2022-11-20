var login_window_exist = false

var templates = document.getElementById('templates').contentWindow

function after_all() {
    document.getElementById('login').addEventListener('click', function () {
        refresh_user()
        if (getCookie('id') !== undefined) {
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
    console.log(menu)

    document.body.insertBefore(menu, document.body.children[0])

    document.getElementById(end).style.borderBottom = '2px solid black'
}
