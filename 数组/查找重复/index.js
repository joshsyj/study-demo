//在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
//例如，如果输入长度为7的数组[2,3,1,0,2,5,3]，那么对应的输出是第一个重复的数字2。

// 推荐解法
function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let hash = []
    for (let i = 0; i < numbers.length; i++) {
        if (!hash[numbers[i]]) {
            hash[numbers[i]] = 1
        } else {
            if (++hash[numbers[i]] === 2) {
                duplication[0] = numbers[i]
                return true
            }
        }
    }
    return false
}

// 解法1：下标检测
function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let obj = {}
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.indexOf(numbers[i]) !== i) {
            duplication[0] = numbers[i]
            return true
        }
    }
    return false
}

// 解法2：对象特性
function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let obj = {}
    for (let i = 0; i < numbers.length; i++) {
        if (!obj[numbers[i]]) {
            obj[numbers[i]] = true
        } else {
            duplication[0] = numbers[i]
            return true
        }
    }
    return false
}

// 解法3：哈希散列法，其实原理和obj差不多
function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let hash = []
    for (let i = 0; i < numbers.length; i++) {
        if (!hash[numbers[i]]) {
            hash[numbers[i]] = 1
        } else {
            if (++hash[numbers[i]] === 2) {
                duplication[0] = numbers[i]
                return true
            }
        }
    }
    return false
}