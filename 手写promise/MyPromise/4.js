const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
class MyPromise {
  constructor(executor) {
    if (typeof executor !== 'function') throw new TypeError('Promise resolver ${executor} is not a function');
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
    // 参数校检
    if (typeof onFulfilled != 'function') {
      onFulfilled = function (value) {
        return value
      }
    }
    if (typeof onRejected != 'function') {
      onRejected = function (reason) {
        throw reason
      }
    }
    // 实现链式调用, 且改变了后面then的值, 必须通过新的实例
    let promise2 = new Promise((resolve, reject) => {
      if (this.status == FULFILLED) {
        setTimeout(() => {
          try {
            console.log(resolve)
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status == REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status == PENDING) {
        // 订阅
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });

        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });

    return promise2;
  }
}
/**
 *
 * @param {*} promise2
 * @param {*x可能是普通值也可能是promise} x
 * @param {*} resolve
 * @param {*} reject
 */
function resolvePromise(promise2, x, resolve, reject) { }

module.exports = MyPromise;
