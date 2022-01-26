let arr = [60, 23, 23, 4, 32, 44, 5]
//1
function sort(arr) {
    arr = arr.slice();
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var c = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = c;
            }
        }
    }
    return arr
}
//2
function sort(arr) {
    arr = arr.slice();
    return arr.sort((a, b) => a - b)
}
//3
function sort(arr) {
    let flag = true
    let len = arr.length
    let stash;
    arr = arr.slice()
    while (flag) {
        flag = false;
        for (let i = 1; i < len; i++) {
            if (arr[i - 1] > arr[i]) {
                flag = true
                stash = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = stash;
            }
        }
        len--;
    }
    return arr;
}

//4
function sort(arr) {
    if (arr.length <= 1) return arr;
    let center = Math.floor(arr.length / 2)
    let p = arr.splice(center, 1)[0]
    let lef = [], rig = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < p) {
            lef.push(arr[i])
        } else {
            rig.push(arr[i])
        }
    }
    return sort(lef).concat([p], sort(rig))
}








console.log(sort(arr))