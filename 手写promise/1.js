const MyPromise = require("./MyPromise");

const promise = new MyPromise((resolve, reject) => {
  resolve(1);
  // reject('error')
  //   throw new Error("throw error haha");
});
console.log(promise);
promise.then(
  (value) => {
    console.log("fulfilled: " + value);
  },
  (reason) => {
    console.log("reason: " + reason);
  }
);
