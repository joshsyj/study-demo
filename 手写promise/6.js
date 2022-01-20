const Promise = require('./MyPromise/5.js')

new Promise((resolve, reject) => {
    // throw new Error('You write wrong')
    // console.log('2')
    resolve(1)
})
    .then(
        value => {
            return new Promise((resolve) => {
                resolve(new Promise((resolve, reject) => {
                    resolve('333')
                })
                )
            })
        },
        reason => {
            console.log('reason', reason)
        }
    )
    .then(
        value => {
            console.log('then 2 value:', value)
        },
        reason => {
            console.log('reason', reason)
        }
    )