const MyPromise = require('./MyPromise')

let a = new MyPromise((resolve, reject) => {
  resolve(1)
})

a.then(res => {
  console.log('value', res)
  return res;
}).then(res => {
  console.log('2:' + res)
})