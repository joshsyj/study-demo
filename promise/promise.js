const Promise = require('./source/Promise')
let promise = new Promise((resolve, reject) => {
    console.log('promise')
    resolve('success')
    // throw(new Error)
    // reject('error')
    console.log(1212)
})
promise.then((data) => {
    console.log(data)
}, (reason) => {
    console.log(reason)
})

console.log('ok')