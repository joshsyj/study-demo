//https://www.teaspect.com/detail/5815?pn=1
//forEach
!function () {
  console.log('forEach')
  //    forEach 会忽略空位 没有返回值
  let arr = [1, 2, 3, , 5].forEach(function (v, k, arr) {
    console.log(k, v * v);
    return v * v;
  })
  console.log(arr);
  console.log('--------------------')
}();

//map
!(function () {
  /*map()
   *   有返回值 遍历时会跳过空位但会保留这个值*/
  console.log('map')
  let arr = [1, 2, 3, , 5].map(function (v, k, arr) {
    console.log(k, v * v);
    return v * v;
  })
  console.log(arr)
  console.log('--------------------')
})()

//filter
!(function () {
  //        filter() 对数组进行 过滤并返回一个数组
  //      与find()findIndex() 类似 都是遍历数组 找出满足条件的元素
  //                find() 返回第一个满足田间的元素
  //                findIndex（）返回的是第一个满足条件的元素的下标
  console.log('filter')
  let arr = [1, 2, 3, 4, 5, , 6].filter((v, k, arr) => {
    console.log(v, k, arr);
    return v < 3;
    //            return
  })
  console.log(arr); //会忽略空位
  console.log('--------------------')
})()

//find
!(function () {
  //        filter() 对数组进行 过滤并返回一个数组
  //      与find()findIndex() 类似 都是遍历数组 找出满足条件的元素
  //                find() 返回第一个满足田间的元素
  //                findIndex（）返回的是第一个满足条件的元素的下标
  console.log('find')
  let arr = [1, , 3, 4, 5, , 6].find((v, k, arr) => {
    console.log(v, k, arr);
    return v == 3;
    //            return
  })
  console.log(arr); //不忽略空位
  console.log('--------------------')
})()

//every
!(function () {
  /*every() 对每个元素进行筛选 全部满足条件则返回true*/
  // 若收到一个空数组，此方法在一切情况下都会返回 true。
  console.log('every')

  let arr = [4, 2, 3, 4, , 7].every((v, k, arr) => {
    console.log(v, k, arr);
    return v > 1

  })
  console.log(arr) //true 会忽略空位
  console.log('--------------------')
})()

//some
!(function () {
  /*some() 对每个元素进行筛选 有一个满足条件则返回true*/
  console.log('some')
  let arr = [4, , 3, 0, , 7].some((v, k, arr) => {
    console.log(v, k, arr);
    return v < 1

  })
  console.log(arr) //true 会忽略空位
  console.log('--------------------')
})()
