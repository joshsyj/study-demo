const myNew = function(){
    let Constructor = Array.prototype.shift.call(arguments);
    let obj = {}
    obj.__proto__ = Constructor.prototype;
    let res = Constructor.apply(obj,arguments);
    return res instanceof Object ? res : obj;
}
function A(a,b){
    this.a = a||1;
    this.b = b||2;
    this.fn = function(){}
}
a = myNew(A,2,3);
console.log(a)