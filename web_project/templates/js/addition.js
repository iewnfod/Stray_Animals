let snow_status = true
function create_snow() {
    let bt = document.createElement('button')
    bt.className = 'snow_bt'
    bt.innerText = '关闭雪花'
    bt.onclick = function () {
        if (snow_status) {
            remove_snow()
            this.innerText = '开启雪花'
            snow_status = false
        } else {
            snow()
            this.innerText = '关闭雪花'
            snow_status = true
        }
    }
    snow()
    document.body.append(bt)
}

function snow() {
    let snow_div = document.createElement('div')
    snow_div.className = 'snow_div'
    snow_div.id = 'snow_div'
    document.body.insertBefore(snow_div, document.body.children[0])

    create_snow_point(snow_div, 0)
}

function create_snow_point(parent, n) {
    let window_width = window.outerWidth - 10
    let snow_point = document.createElement('div')
    snow_point.className = 'snow_point'

    let hw = random(5, 10) + 'px'
    snow_point.style.width = hw
    snow_point.style.height = hw
    snow_point.style.backgroundSize = hw + ' ' + hw

    let snow_point_time = random(20, 30)
    let delay_time = Math.random() * 50
    let rotate_deg = [random(-2880, -1440), random(1440, 2880)][random(0, 1)]
    let left = random(10, window_width)
    let left_move = left + random(-200, 200)
    // console.log(snow_point_time, delay_time, rotate_deg, left)

    snow_point.style.left = left + 'px'
    snow_point.style.animationDuration = snow_point_time + 's'
    snow_point.style.animationDelay = delay_time + 's'
    snow_point.style.setProperty('--rotate-deg', rotate_deg + 'deg')
    snow_point.style.setProperty('--left', left_move + 'px')

    parent.append(snow_point)
    // console.log(snow_point)
    if (n <= 200) {
        return create_snow_point(parent, n+1)
    } else {
        return undefined
    }
}

function remove_snow() {
    document.body.removeChild(document.getElementById('snow_div'))
}
