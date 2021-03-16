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
        remaining = 0,
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
