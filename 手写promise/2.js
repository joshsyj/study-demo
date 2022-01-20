const MyPromise = require("./MyPromise/2");

// const promise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// });
// promise.then(
//   (value) => {
//     console.log("fulfilled: " + value);
//   },
//   (reason) => {
//     console.log("reason: " + reason);
//   }
// );

// promise.then(
//   (value) => {
//     console.log("fulfilled: " + value);
//   },
//   (reason) => {
//     console.log("reason: " + reason);
//   }
// );



new MyPromise((resolve, reject) => {
  // throw new Error('You write wrong')
  // console.log('2')
  resolve(1)
})
  .then(
    value => {
      return new MyPromise((resolve) => {
        resolve(new MyPromise((resolve, reject) => {
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