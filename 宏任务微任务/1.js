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
