class user {
    constructor(name, id, img) {
        this.name = name // string
        this.id = id // int
        this.img = img // string
    }
}

class pet {
    constructor(name, sex, img, type, id, weight, sterilization, parasite, immune) {
        this.name = name // string
        this.sex = sex // 0, 1, -1
        this.img = img // url
        this.type = type // string 猫，狗...
        this.id = id // string
        this.weight = weight // int
        this.sterilization = sterilization // bool
        this.parasite = parasite // bool
        this.immune = immune // bool
        this.link = "./pet/" + id
    }
}

class comment {
    constructor(id, sender, good_num, content) {
        this.id = id
        this.sender = sender
        this.good_num = good_num
        this.content = content
    }
}
