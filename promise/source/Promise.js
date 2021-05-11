const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class Promise {
    constructor(excutor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.arr = [];
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
        try {
            excutor(resolve, reject);
        } catch (err) { }
    }
    then(onFulfilled, onRejected) {
        if (this.status === PENDING) {
            this.arr.push(onFulfilled)
        }
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status === REJECTED) {
            onRejected(this.reason);
        }
    }
}

module.exports = Promise