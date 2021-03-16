


function after1(target, key, descriptor) {
    console.log("after1",descriptor.value)
    const fn = descriptor.value;
    return {
        ...descriptor,
        value() {
            console.log(1)
            let result = fn.apply(this, arguments);
            console.log('after1');
            return result;
        }
    }
}
function after(target, key, descriptor) {
    console.log("after",descriptor.value)
    const fn = descriptor.value;
    return {
        ...descriptor,
        value() {
            console.log(2)
            let result = fn.apply(this, arguments);
            console.log('after');
            return result;
        }
    }
}
function before(target, key, descriptor) {
    console.log("before",descriptor.value)
    const fn = descriptor.value;
    return {
        ...descriptor,
        value() {
            console.log(3)
            return fn.apply(this, arguments);
        }
    }
}
function after2(target, key, descriptor) {
    const fn = descriptor.value;
    console.log('after2',descriptor.value)
    return {
        ...descriptor,
        value() {
            console.log(4)
            let result = fn.apply(this, arguments);
            console.log('after2');
            return result;
        }
    }
}

class Test {
    @after1
    @after
    @before
    @after2
    func() {
        console.log('func')
    }
}

const test = new Test();

test.func()


