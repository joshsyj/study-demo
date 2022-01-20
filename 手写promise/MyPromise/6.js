class Promise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(exector) {
    if (typeof exector != 'function') { throw new Error('exector != function') }
    this.state = Promise.PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCb = []
    this.onRejectedCb = []
    try {
      exector(this.resolve.bind(this), this.reject.bind(this))
    }
    catch (e) {
      this.reject(e)
    }
  }
  resolve(value) {
    if (this.state == Promise.PENDING) {
      setTimeout(() => {
        this.state = Promise.FULFILLED
        this.value = value
        this.onFulfilledCb.map(fn => { fn(value) })
      })
    }
  }
  reject(reason) {
    if (this.state == Promise.PENDING) {
      setTimeout(() => {
        this.state = Promise.REJECTED
        this.reason = reason
        this.onRejectedCb.map(fn => fn(reason))
      })
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : (value) => value
    onRejected = typeof onRejected == 'function' ? onRejected : (reason) => { throw reason }

    let promise2 = new Promise((resolve, reject) => {
      if (this.state == Promise.PENDING) {
        this.onFulfilledCb.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedCb.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
      if (this.state == Promise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.state == Promise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise2
  }
}
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 == x) {
    return reject(new Error('Chaining cycle detected for promise'))
  }
  if (x instanceof Promise) {
    if (x.state == Promise.PENDING) {
      x.then(y => {
        resolvePromise(promise2, y, resolve, reject)
      }, reject)
    }
    else if (x.state == Promise.FULFILLED) {
      resolve(x.value)
    }
    else if (x.state == Promise.REJECTED) {
      reject(x.reason)
    }
  }
  else if (x != null && (typeof x == 'function' || typeof x == 'object')) {
    try {
      var then = x.then
    } catch (e) {
      return reject(e)
    }


    if (typeof then == 'function') {
      let called = false;
      try {
        then.call(x, (y) => {
          if (called) return;
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if (called) return;
          called = true;
          reject(r);
        })
      }
      catch (e) {
        if (called) return;
        called = true
        reject(e)
      }
    }
    else {
      resolve(x)
    }
  }
  else {
    return resolve(x)
  }
}
Promise.deferred = function () {
  let result = {};
  result.promise = new Promise((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
}

module.exports = Promise

