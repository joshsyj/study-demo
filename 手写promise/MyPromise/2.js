const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class MyPromise {
  constructor(executor) {
    if (!executor) throw new Error("exector is require");
    this.value = undefined;
    this.reason = undefined;
    this.status = PENDING;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      if (this.status == PENDING) {
        this.status = FULFILLED;
        this.value = value;
        //发布
        this.onFulfilledCallbacks.map((v) => v());
      }
    };
    let reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        //发布
        this.onRejectedCallbacks.map((v) => v());
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
    if (this.status == PENDING) {
      // 订阅
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      });

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

module.exports = MyPromise;
