const wrapPromise = fn => {
  return (...args) => Promise.resolve(fn(...args))
}

const pLimit = (fn, limit) => {
  const queue = []

  const runTasks = () => {
    if (queue.length > 0 && queue.length <= limit) {
      const func = queue.shift()
      func().then(runTasks)
    }
  }

  return (...args) => {
    return new Promise((resolve, reject) => {
      queue.push(() => {
        return fn(...args)
          .then(resolve)
          .catch(reject)
      })
      runTasks()
    })
  }
}

// const pLimit = (fnPromise, limit) => {
//   const q = []

//   const runTask = () => {
//     if (q.length > 0 && q.length <= limit) {
//       const top = q.shift()
//       top().then(runTask)
//     }
//   }

//   return (...args) => {
//     q.push(() => fnPromise(...args))
//   }
// }

const testFn = arg => {
  console.log('test', arg)
}

const fnPromisify = wrapPromise(testFn)

const countLimit = pLimit(fnPromisify, 2)
countLimit('a') // 立即执行
countLimit('b') // 立即执行
countLimit('c') // 前两个函数执行完再执行
