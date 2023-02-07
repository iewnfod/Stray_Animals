function remove_animation(_animation_) {
    _animation_.el.remove()
}

// 加载
function loading(_parent_) {
    const loading_animation = new mojs.Shape({
        parent: '#'+_parent_,
        shape: 'circle',
        stroke: '#000000',
        strokeDasharray: '125, 125',
        strokeDashoffset: {'0': '-125'},
        strokeWidth: 4,
        fill: 'none',
        left: '50%',
        top: '50%',
        rotate: {'-90': '270'},
        radius: 20,
        isShowStart: true,
        duration: 2000,
        easing: 'back.in'
    })
        .then({
            rotate: {'-90': '270'},
            strokeDashoffset: {'-125': '-250'},
            duration: 3000,
            easing: 'cubic.out'
        })

    loading_animation.play()

    return loading_animation
}
