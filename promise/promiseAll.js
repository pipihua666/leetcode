/* 
  1. 返回promise
  2. 参数判断，不是数组的话就抛错
  3. 遍历参数，将数组每一项promisify
  4. 其中某一项出错则返回相应的error
  5. 当遍历完数组参数时，返回数组结果 
*/

promiseAll = args => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(args)) {
      reject(new TypeError('参数类型错误'))
    }
    console.log('我进来了')
    const arr = []
    args.forEach(item => {
      Promise.resolve(item)
        .then(result => {
          arr.push(result)
          if (arr.length === args.length) {
            resolve(arr)
          }
        })
        .catch(error => reject(error))
    })
  })
}

const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(123)
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  reject(222)
})

const promise3 = new Promise((resolve, reject) => {
  reject(333)
})

const arr = 'hi'

promiseAll([promise1, promise2, promise3])
  .then(result => {
    console.log('success', result)
  })
  .catch(error => {
    console.log('error', error)
  })

promiseAll([1, 2, 3])
  .then(result => {
    console.log('success', result)
  })
  .catch(error => {
    console.log('error', error)
  })
