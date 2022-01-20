//[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
let arr = [1, [2, 3, [4, 5, [6, 7]]]];
//1
function flat(arr) {
    arr = arr.slice()
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flat(item) : item)
    }, [])
}
//2
function flat(arr) {
    arr = arr.slice()
    arr = String(arr).split(',').map(v => Number(v))
    return arr
}
//3
function flat(arr) {
    arr = arr.slice()
    arr = arr.join().split(',').map(v => Number(v))
    return arr
}

//4
function flat(arr) {
    while (arr.some((v) => Array.isArray(v))) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flat(arr))