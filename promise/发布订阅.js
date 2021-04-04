fs = require('fs')
const events = {
    _event: [],
    on(fn) {
        this._event.push(fn)
    },
    emit(data, index) {
        this._event.forEach(v => v(data, index))
    }
}

events.on(() => {
    console.log('触发一次')
})
events.on((v, index) => {
    arr[index] = v;
})
events.on(() => {
    //当2个接口有响应时
    if (arr.length == 2) {
        console.log('结束', arr)
    }
})

let arr = [];
//异步请求2个文件
fs.readFile('./a.txt', 'UTF8', (err, data) => {
    events.emit(data, 1)
})
fs.readFile('./b.txt', 'UTF8', (err, data) => {
    events.emit(data, 0);
})
