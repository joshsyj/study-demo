Function.prototype.before = function (fn) {
    var _this = this;       // 用来保存调用这个函数的引用，如func_1调用此函数，则_this指向func_1
    return function () {      // 返回一个函数，这个函数包含原函数和新函数，原函数指的是func_1，新函数指的是fn
        // console.log(_this,this)
        fn.apply(null);   // 执行新函数
        return _this.apply(null);     // 执行原函数
    }
}

Function.prototype.after = function (fn) {
    var _this = this;
    return function () {
        console.log(_this, this)
        var r = _this.apply(null); // 先执行原函数，也就是func_1
        fn.apply(this, arguments);   // 再执行新函数
        return r;
    }
}

var func_1 = function () {
    console.log("2")
}
func_1 = func_1
    .before(function () {
        console.log("1");

    })
    .after(function () {
        console.log("3");
    })



func_1();   // 输出1、2、3

