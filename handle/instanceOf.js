const myInstanceof = function (left, right) {
    right = right.prototype;
    left = left.__proto__;
    while (true) {
        if (left === null) {
            return false;
        }
        if (left === right) {
            return true;
        }
        left = left.__proto__;
    }
}

function A() { }

a = new A()


console.log(myInstanceof(a, A))