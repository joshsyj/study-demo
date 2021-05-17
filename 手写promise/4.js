const MyPromise = require("./MyPromise/4");

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
  // reject('error')
  //   throw new Error("throw error haha");
});
promise.then(
  (value) => {
    console.log("fulfilled: " + value);
  },
  (reason) => {
    console.log("reason: " + reason);
  }
);

promise.then(
  (value) => {
    console.log("fulfilled: " + value);
  },
  (reason) => {
    console.log("reason: " + reason);
  }
);
