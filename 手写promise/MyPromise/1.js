const FULFILLED = "FULFILLED";
const PENDING = "PENDING";
const REJECTED = "REJECTED";

class MyPromise {
  constructor(executor) {
    if (!executor) throw new Error("exector is require");
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    let resolve = (value) => {
      if (this.status == PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };

    let reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status == FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status == REJECTED) {
      onRejected(this.reason);
    }
  }
}

module.exports = MyPromise;
