function snow() {
    let snow_div = document.createElement('div')
    snow_div.className = 'snow_div'
    document.body.insertBefore(snow_div, document.body.children[0])

    create_snow_point(snow_div, 0)
}

function create_snow_point(parent, n) {
    let window_width = window.outerWidth - 10
    let snow_point = document.createElement('div')
    snow_point.className = 'snow_point'
    snow_point.style.left = parseInt(random(10, window_width)) + 'px'
    let hw = random(5, 10) + 'px'
    snow_point.style.width = hw
    snow_point.style.height = hw
    snow_point.style.backgroundSize = hw + ' ' + hw
    let snow_point_time = random(20, 30)
    let delay_time = Math.random() * 200
    snow_point.style.animationDuration = snow_point_time + 's'
    snow_point.style.animationDelay = delay_time + 's'
    parent.append(snow_point)
    // console.log(snow_point)
    if (n <= 250) {
        return create_snow_point(parent, n+1)
    } else {
        return undefined
    }
}
