//https://www.cnblogs.com/CoderZX/p/12250835.html
class Set {
    constructor(params) {
        if (typeof params[Symbol.iterator] !== 'function') {
            throw new TypeError('Set的参数不是一个可以迭代的对象')
        }
        this._data = []
        for (var item of params) {
            this.add(item)
        }
    }

    //添加元素
    add(data) {
        if(!this.has(data)) {
            this._data.push(data)
        }
    }
    //判断是否含有该元素
    has (data) {
        for (let index = 0; index < this._data.length; index++) {
            const element = this._data[index];
            if(this.isEqual(element,data)) {
                return true
            }
        }
        return false
    }
    delete (data) {
        for (let index = 0; index < this._data.length; index++) {
            const element = this._data[index];
            if(this.isEqual(data,element)) {
                this._data.splice(index, 1)
                return true
            }
        }
        return false
    }
    forEach(callback) {
        for (const item of this._data) {
            callback(item, item, this)
        }
    }　　　　　//加入生成器，使set实例对象可以被迭代
    *[Symbol.iterator] () {
        for(let item of this._data) {
            yield item
        }
    }
    clear () {
        this._data = []
    }
   /**
    * 判断两个数是否相等
    * @param {*} data1
    * @param {*} data2
    */

   isEqual(data1, data2) {
        if(data1 === 0 && data2 === 0) {
            return true
        }
        return Object.is(data1, data2)
    }
}