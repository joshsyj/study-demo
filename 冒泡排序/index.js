let arr = [60, 23, 5, 2, 34, 54, 3, 2, 5, 213, 23]

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
console.log(sort(arr))