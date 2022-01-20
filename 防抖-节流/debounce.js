// var debounce = function (fn, delay = 2000) {
//     let timer = null;
//     return function () {
//         let args = arguments;
//         let context = this;
//         if (timer) {
//             clearTimeout(timer)
//             timer = setTimeout(function () {
//                 fn.apply(context, args)
//             }, delay);
//         } else {
//             timer = setTimeout(() => {
//                 fn.apply(context, args)
//             }, delay);
//         }
//     }
// }

var input = document.getElementById('ipt');
// var d = debounce(function () {
//     console.log(input.value)
// }, 1000);
// input.oninput = function (v) {
//     d();
// }


var d = throttle(function () {
    console.log(input.value)
}, 3000);

input.oninput = function (v) {
    d();
}


function throttle(fn, delay) {
    let timer = null,
        previous = new Date();
    return function () {
        let now = new Date(),
            remaining = now - previous,
            args = arguments,
            context = this;
        if (remaining >= delay) {
            if (timer) {
                clearTimeout(timer);
            }
            fn.apply(context, args);
            previous = now;
        } else {
            if (!timer) {
                timer = setTimeout(function () {
                    fn.apply(context, args);
                    previous = new Date();
                }, delay - remaining);
            }
        }
    };
}

function throttle(func, wait, options) {
    let _this, args, timeout;
    let old = 0;     //时间戳
    //如果没有options就将其设置为空对象
    if (!options) options = {};
  
    let later = function () {
      old = new Date().valueOf();
      timeout = null;
      func.apply(_this, args);
    }
    return function () {
      _this = this;
      args = arguments;
      let now = new Date().valueOf();
      if (options.leading === false && !old) {
        old = now;
      }
      if (now - old > wait) {
        // 第一次直接执行
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        func.apply(_this, args);
        old = now;
      } else if (!timeout && options.trailing !== false) {
        //最后一次也被执行
        timeout = setTimeout(later, wait)
      }
    }
  }
  
  