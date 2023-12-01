const time = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, n, true)
    })
}

const promiseAll = (promises) => {
    let result = []
    let count = promises.length
    return new Promise((resolve, reject) => {
        for (let i = 0; i < count; i++) {
            promises[i].then(response => {
                result.push(response)
                if (count === result.length) {
                    resolve(result)
                }
            })

        }
    })
}
promiseAll([
    time(1000),
    time(500),
    time(3000),
    Promise.resolve(10),
    Promise.resolve(30)
]).then((res) => {
    console.log(res, 'Main Response')
}).catch((error)=>{
    console.log(error,'error')
})

