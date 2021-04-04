class Subject {//被观察者
    constructor(name, state) {
        this.name = name;
        this.state = state;
        this.sub = [];
    }
    attach(b){
        this.sub.push(b)
    }
    setState(state) {
        this.state = state;
        this.sub.forEach((b) => { b.update(`${b.name}: ${this.name}${this.state}`) })
    }
}


class Observer {//观察者
    constructor(name) {
        this.name = name;
    }
    update(txt) {
        console.log(txt)
    }
}


let a = new Subject('宝宝', '开心');
let b1 = new Observer('爸爸');
let b2 = new Observer('妈妈');
a.attach(b1)
a.attach(b2)

a.setState('不开心')