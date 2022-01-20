Function.prototype.apply = function (context, arg) {
    context = context ? Object(context) : window;
    context.fn = this;
    if (!arg) {
        return context.fn();
    }
    var result = eval('context.fn(' + arg + ')');
    console.log(result)
    delete context.fn;
    return result;
};




[].forEach.apply([1, 2, 3, 4], function (v) {
    console.log(v)
});
