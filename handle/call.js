Function.prototype.call = function (context) {
    context = context ? Object(context) : window;
    context.fn = this;
    console.log(arguments)
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    //[].forEach(function (v) {
        //console.log(v)
    //})
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
};


[].forEach.call([1, 2, 3, 4], function (v) {
    console.log(v)
})