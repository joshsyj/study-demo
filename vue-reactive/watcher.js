class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.depIds = {};

        if (typeof exp === 'function') {
            this.getter = exp;
        }
        else {
            this.getter = this.parseGetter(exp)
        }
        this.value = this.get();
    }
    get() {
        Dep.target = this;
        var val = this.getter();
        Dep.target = null;
        return val;
    }
    run() {
        var value = this.get();
        var old = this.value;
        if (value != old) {
            this.cb(value)
        }
    }
    updated() {
        this.run();
    }
    addSub(dep) {
        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this);
            this.depIds[dep.id] = dep;
        }
    }
    parseGetter(exp) {
        if (/[^\w.$]/.test(exp)) return;
        exp = exp.split('.');
        return function () {
            var val = this.vm.data;
            exp.forEach((k) => {
                val = val[k];
                console.log(val)
            })
            return val;
        }
    }
}