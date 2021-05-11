const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED';

class MyPromise {
  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('Promise resolver ${executor} is not a function')
    }
    this.value = undefined;
    this.reason = undefined;
    this.status = PENDING;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];

    let resolve = (value) => {
      if (this.status == PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    }
    let reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }
    fn(resolve, reject);
  }

  then (onFulfilled, onRejected) {
    if (this.status == PENDING) {
      this.onFulfilledCallback.push(onFulfilled);
      this.onRejectedCallback.push(onRejected);
    }
    if (this.status == FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status == REJECTED) {
      onRejected(this.value)
    }
  }
}
module.exports = MyPromise