//https://mp.weixin.qq.com/s/4jyfpJjMNASXji3vUXOGZQ
//字节：一道 JS 基础编程题（闭包）


var foo = function (...args) {
  // 要求实现函数体
  let fun = function (...args2) {
    return foo(...[...args, ...args2]);
  };

  fun.getValue = function () {
    return args.reduce((p, c) => {
      return p + c;
    });
  };
  return fun;
};


var f1 = foo(1, 2, 3);
console.log(f1.getValue());
// 6 输出是参数的和

var f2 = foo(1)(2, 3);
console.log(f2.getValue());
// 6

var f3 = foo(1)(2)(3)(4);
console.log(f3.getValue());
// 10


