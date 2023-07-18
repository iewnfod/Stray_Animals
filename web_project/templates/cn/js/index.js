//添加一篇文章 函数
let index = 0;
function add_passage(maintitle, subtitle, url, image_url) {
    index ++;
    let t = document.getElementById('a_passage')
    t.content.getElementById('passage_a').setAttribute('href', url)
    t.content.getElementById('main_image').src = image_url
    t.content.getElementById('main_title').innerText = maintitle
    t.content.getElementById('sub_title').innerText = subtitle
    let clone = t.content.cloneNode(true)
    document.getElementById(`passage_container${index%2}`).appendChild(clone)
}
// 添加文章
add_passage('【领养合集】一大波阳光爱笑的狗狗上线 | 城管8狗还剩卡拉无人问津', '流浪动物发声 杭州领养 流浪动物发声 2023-05-25 18:33 发表于浙江', 'https://mp.weixin.qq.com/s/DjhxzEKzYtwdUlbhizMQcA', 'https://resources.muyunxi.top/static/articles/cover/3.jpg')
add_passage('虎子：小狗狗能有什么坏心思呢，TA只是想要很多爱', ' 流浪动物发声  杭州领养 流浪动物发声  2022-07-11 18:00 发表于江苏', 'https://mp.weixin.qq.com/s/r3Qmt1Zoc-9I5soBwfJgCA', 'https://resources.muyunxi.top/static/articles/cover/1.jpg')
add_passage('朱古力：死里逃生，我成为了星球上独一无二的小王子', ' 流浪动物发声  杭州领养 流浪动物发声  2022-05-22 20:07 发表于浙江', 'https://mp.weixin.qq.com/s/gOWa81PI05AuxfsGpczJhQ', 'https://resources.muyunxi.top/static/articles/cover/2.png')

// 一个宠物卡片
function add_pet(name, sex, img, id) {
    let t = document.getElementById('a_help')
    t.content.getElementById('pet_img').src = img
    t.content.getElementById('pet_name').innerText = name
    t.content.getElementById('pet_sex').innerText = sex
    t.content.getElementById('pet_id').innerText = id
    t.content.getElementById('pet_a').setAttribute('href', './pet.html?id='+id)
    let clone = t.content.cloneNode(true)
    document.getElementById('pet_container').appendChild(clone)
}
add_pet('name', 'sex', '../Images/loading.png', '')
add_pet('name', 'sex', '../Images/loading.png', '')
