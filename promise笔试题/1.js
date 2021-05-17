// 一道美团的promise面试题，引发的思考
//https://mp.weixin.qq.com/s/jEGub99krR6NDa6B6rPKvA

const list = [1, 2, 3];
const YB = async (v) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, v ** 2);
  });
};

list.forEach(async (v) => {
  let res = await YB(v);
  console.log(res);
});
