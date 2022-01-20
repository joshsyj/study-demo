//手写setTimeout

let setTimeout = (fn, timeout, ...args) => {
    let start;
    let timer;

    //当你准备更新动画时你应该调用此方法。这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数(即你的回调函数)。
    //回调函数执行次数通常是每秒60次，但在大多数遵循W3C建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。
    //为了提高性能和电池寿命，因此在大多数浏览器里，当requestAnimationFrame() 运行在后台标签页或者隐藏的<iframe> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命。
    let n = 0;
    const loop = (timestamp) => {
        console.log(timestamp)
        console.log(n++)
        if (start == undefined) start = timestamp;
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            fn.apply(this, args)
            window.cancelAnimationFrame(timer)
            return
        }
        else {
            timer = window.requestAnimationFrame(loop)
        }
    }
    timer = window.requestAnimationFrame(loop)
}

function showName() {
    console.log("Hello")
}
let timerID = setTimeout(showName, 1000);

//手写setInterval
// let setInterval = (fn, t, ...args) => {
//     let timer, start = Date.now();
//     const loop = (timestamp) => {
//         timer = window.requestAnimationFrame(loop);
//         let end = Date.now();
//         if ((end - start) / t > 1) {
//             start = end;
//             fn.apply(this, args);
//         }
//     };
//     window.requestAnimationFrame(loop);
// };

// let b = 0;
// let start = Date.now(), end = Date.now();
// let duration = 0;

// setInterval(() => {
//     b++;
//     end = Date.now();
//     duration = start - end;
//     start = end;
//     console.log(b);
//     console.log(duration);
// }, 2000);