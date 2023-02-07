function add_user(user, if_current_user) {
    db.transaction(
        function (tx) {
            // 尝试创建表格
            tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (id PRIMARY KEY UNIQUE INT, if_current_user BOOL, name TEXT, img TEXT); ')
            // 添加用户
            if (if_current_user === true) {
                tx.executeSql('INSERT INTO USERS VALUES (' + user.id.toString() + ', ' + 'TRUE' + ', ' + '"' + user.name + '"' + ', ' + '"' + user.img + '"' + '); ')
            } else {
                tx.executeSql('INSERT INTO USERS VALUES (' + user.id.toString() + ', ' + 'FALSE' + ', ' + '"' + user.name + '"' + ', ' + '"' + user.img + '"' + '); ')
            }
        }
    )
}

function get_current_user() {
    db.transaction(
        function (tx) {
            tx.executeSql('SELECT * FROM USERS WHERE if_current_user == TRUE; ', [], function (tx, results) {
                var current_user = document.createElement('span')
                document.body.appendChild(current_user)
                current_user.innerText = results.rows[0]
                current_user.setAttribute('name', 'current_user')
            }, null)
        }
    )
}
