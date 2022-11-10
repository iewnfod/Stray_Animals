var login_window_exist = false

var templates = document.getElementById('templates').contentWindow

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
