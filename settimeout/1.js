手写setTimeout
let setTimeout = (fn, timeout, ...args) => {
    // 初始当前时间
    const start = +new Date()
    let timer, now;
    timer = window.requestAnimationFrame(loop)
    const loop = (timestamp) => {
        // 当前一次执行页面渲染回调的时间戳
        // 减去上一次时间戳为两次执行的时间戳间隔
        // 1秒大约可以执行60次回调 即间隔约为0.01666666秒 同浏览器刷新频率
        console.log(timestamp)
        // 再次运行时获取当前时间
        now = +new Date()
        // 当前运行时间 - 初始当前时间 >= 等待时间 ===>> 跳出
        if (now - start >= timeout) {
            fn.apply(this, args)
            window.cancelAnimationFrame(timer)
            return
        }
    }
    window.requestAnimationFrame(loop)
}

function showName() {
    console.log("Hello")
}
let timerID = setTimeout(showName, 1000);

手写setInterval
let setInterval = (fn, t, ...args) => {
    let timer, start = Date.now();
    const loop = (timestamp) => {
        timer = window.requestAnimationFrame(loop);
        let end = Date.now();
        if ((end - start) / t > 1) {
            start = end;
            fn.apply(this, args);
        }
    };
    window.requestAnimationFrame(loop);
};

let b = 0;
let start = Date.now(), end = Date.now();
let duration = 0;

setInterval(() => {
    b++;
    end = Date.now();
    duration = start - end;
    start = end;
    console.log(b);
    console.log(duration);
}, 2000);