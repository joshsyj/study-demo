Function.prototype.bind = function(context) {
    let that = this;
    let bindArgs = Array.prototype.slice.call(arguments, 1);
    function Fn () {};
    function fBound(params) {
        let args = Array.prototype.slice.call(arguments) ;
        return that.apply(this instanceof fBound ? this : context, bindArgs.concat(args));
    }
    Fn.prototype = this.prototype;
    fBound.prototype = new Fn();
    return fBound;
}

b = function(){
    console.log(this)
}.bind({a:1});

b();