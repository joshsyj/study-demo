class Observer {
    constructor(vm, data) {
        this.vm = vm;
        this.data = data;
        this.defineReactive(this.data);
    }
    defineReactive(data) {
        if (!data || !this.vm.isObject(data)) return;
        for (var key in data) {
            this.reactive(data, key, data[key]);
        }
    }
    reactive(data, key, val) {
        var self = this;
        this.defineReactive(val);
        var dep = new Dep();
        Object.defineProperty(data, key, {
            get() {
                if (Dep.target) {
                    debugger
                    dep.depend(Dep.target)
                }
                return val;
            },
            set(newVal) {
                console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
                val = newVal;
                self.defineReactive(newVal);
                dep.notice();
            }
        })
    }
}

var id = 0;
class Dep {
    constructor() {
        this.id = id++;
        this.sub = []
    }
    depend(w) {
        w.addSub(this)
    }
    addSub(w) {
        this.sub.push(w)
    }
    notice() {
        this.sub.forEach(v => {
            v.updated();
        })
    }
}