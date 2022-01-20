var date = new Date()

console.log(1, new Date() - date)
setTimeout(() => {
    console.log(2111, new Date() - date)
}, 501)
setTimeout(() => {
    console.log(2, new Date() - date)
}, 500)

Promise.resolve().then(console.log(3, new Date() - date))

while (new Date() - date < 1000) { }

console.log(4, new Date() - date)

//https://mp.weixin.qq.com/s/G6w8HtmkJzKW5IVVP1AIFA

//微任务包括：MutationObserver、Promise.then()或catch()、Promise为基础开发的其它技术，比如fetch API、V8的垃圾回收过程、Node独有的process.nextTick 、 Object.observe（已废弃；Proxy 对象替代）

//宏任务包括：script 、setTimeout、setInterval 、setImmediate 、I/O 、UI rendering 、 postMessage 、 MessageChannel


