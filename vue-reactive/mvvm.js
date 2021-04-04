class MVVM {
    constructor(obj) {
        if (!this.isObject(obj)) return;
        this.data = obj.data;
        new Observer(this, this.data)
        if (obj.el) {
            new Compiler(this, this.data, document.querySelector(obj.el))
        }
    }
    isObject(obj) {
        return Object.prototype.toString.call(obj).indexOf('Object') > -1 ? true : false;
    }
}