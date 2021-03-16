const myCreate = function (obj) {
    function F() { };
    F.prototype = obj;
    return new F();
}
console.log(myCreate({a:1}))