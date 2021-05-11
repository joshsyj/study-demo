const a = new Promise((resolve,reject)=>{
    resolve(1)
})

a.then((res)=>{
    return res
}).then((res)=>{
    return new Promise((resolve,reject)=>{
        resolve(res)
    })
}).then((res)=>{
    console.log(res)
})