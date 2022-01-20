Function.prototype.bind = function (context) {
    let that = this;
    let bindArgs = Array.prototype.slice.call(arguments, 1);
    function Fn() { };
    function fBound(params) {
        console.log(params)
        let args = Array.prototype.slice.call(arguments);
        return that.apply(this instanceof fBound ? this : context, bindArgs.concat(args));
    }
    Fn.prototype = this.prototype;
    fBound.prototype = new Fn();
    return fBound;
}

b = function () {
    console.log(this)
    console.log(arguments)
}.bind({ a: 1 }, 1, 2);


b(3);
new b(3)
