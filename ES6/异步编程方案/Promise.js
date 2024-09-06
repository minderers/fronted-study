const promise = new Promise((resolve, reject) => {
    Request({
        URL: 'http://xxx.com',
        onSuccess(data) {
            resolve(data)
        },
        onError(err) {
            reject(err)
        }
    })
})

promise.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log('done')
})

var promise1, promise2 = new Promise()
Promise.all([promise1, promise2]).then((res1,res2) => {
    console.log(res1, res2)
})

Promise.race([promise1, promise2]).then((res) => {
    console.log(res)
})

const getRes = async () => {
    try {
        let res = await fetch('http://xxx.json')
        console.log(res)
    }catch(err) {
        console.log(err)
    }
}