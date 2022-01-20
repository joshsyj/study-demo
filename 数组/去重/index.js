let arr = [2, 3, 1, 2, 3, 4, 2, 3, 4, 3, 5]
//方法1
// let arr1 = Array.from(new Set(arr))

// let arr1 = [...new Set(arr)]
// console.log(arr1)

//方法2
let map = {};
for (let i = 0; i < arr.length; i++) {
  if (map[arr[i]]) {
    arr.splice(i, 1)
    i--;
  }
  else {
    map[arr[i]] = true
  }
}
console.log(arr)
