var n = 2;//4  8  
var obj = {
    n: 3,
    fn: (function (n) {
        n *= 2;
        console.log(this)
        this.n += 2;
        var n = 5;
        return function (m) {
            this.n *= 2;//this =>window:8   obj:6
            console.log(m + (++n));//9  10
        }
    })(n)
}
var fn = obj.fn;
fn(3);
obj.fn(3);
console.log(n, obj.n);

// 结果
// 9
// 10
// 8  6




//++++++++++++++++++++++++++++++++++++++++++项目案例
//每个人都把自己实现的功能封装在了各自的命名空间下，就不会冲突了
//张三去做换肤功能
var skipRender = (function () {
    var fn = function () {
        //...
    };
    //...
    return {
        init: function () {
            //...
        }, //作为当前模块的唯一入口，当调用的时候就用：skipRender.init()
        fn: fn //暴露方法，让其他人调取
    }
})();

//李四去做天气功能
var weatherRender = (function () {
    var fn = function () {
        //...
    };
    //...
    return {
        init: function () {
            fn();//调取自己模块中的方法，直接就可以调取使用
            skipRender.fn();//调取别人模块的方法
            //...
        }        //作为当前模块的唯一入口
    }
})();