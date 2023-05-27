class MyPromise {
  // 管理状态
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(func) {
    // 初始状态
    this.promiseState = MyPromise.PENDING
    // 结果
    this.promiseResult = null
    // 成功回调，用于then的多次调用
    this.fulfillCallbacks = []
    // 失败回调，用户then的多次调用
    this.rejectCallbacks = []
    try {
      func(this.resolve, this.reject)
    } catch (error) {
      // 生成实例时，如果报错，则抛出错误
      this.reject(error)
    }
  }

  resolve = result => {
    if (this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.FULFILLED
      this.promiseResult = result
      this.fulfillCallbacks.forEach(callback => callback(result))
    }
  }

  reject = reason => {
    if (this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.REJECTED
      this.promiseResult = reason
      this.rejectCallbacks.forEach(callback => callback(reason))
    }
  }

  then = (onFulFilled, onRejected) => {
    const promise = new MyPromise((resolve, reject) => {
      const fulfillCallback = result => {
        setTimeout(() => {
          if (typeof onFulFilled !== 'function') {
            resolve(this.promiseResult)
          } else {
            try {
              const x = onFulFilled(this.promiseResult)
              resolvePromise(promise, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }
        })
      }
      const rejectCallback = reason => {
        setTimeout(() => {
          if (typeof onRejected !== 'function') {
            reject(this.promiseResult)
          } else {
            try {
              const x = onRejected(this.promiseResult)
              resolvePromise(promise, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }
        })
      }
      if (this.promiseState === MyPromise.PENDING) {
        this.fulfillCallbacks.push(fulfillCallback)
        this.rejectCallbacks.push(rejectCallback)
      } else if (this.promiseState === MyPromise.FULFILLED) {
        fulfillCallback(this.promiseResult)
      } else if (this.promiseState === MyPromise.REJECTED) {
        rejectCallback(this.promiseResult)
      }
    })
    return promise
  }
}

MyPromise.deferred = function () {
  let result = {}
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
  // 2.3.1规范 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
  if (x === promise2) {
    throw new TypeError('Chaining cycle detected for promise')
  }

  if (x instanceof MyPromise) {
    /**
     * 2.3.2 如果 x 为 Promise ，则使 promise2 接受 x 的状态
     *       也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
     */
    x.then(y => {
      resolvePromise(promise2, y, resolve, reject)
    }, reject)
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 2.3.3 如果 x 为对象或函数
    try {
      // 2.3.3.1 把 x.then 赋值给 then
      var then = x.then
    } catch (e) {
      // 2.3.3.2 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
      return reject(e)
    }

    /**
     * 2.3.3.3
     * 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
     * 传递两个回调函数作为参数，
     * 第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`
     */
    if (typeof then === 'function') {
      // 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
      let called = false // 避免多次调用
      try {
        then.call(
          x,
          // 2.3.3.3.1 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          y => {
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          // 2.3.3.3.2 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          r => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } catch (e) {
        /**
         * 2.3.3.3.4 如果调用 then 方法抛出了异常 e
         * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
         */
        if (called) return
        called = true

        // 2.3.3.3.4.2 否则以 e 为据因拒绝 promise
        reject(e)
      }
    } else {
      // 2.3.3.4 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x)
    }
  } else {
    // 2.3.4 如果 x 不为对象或者函数，以 x 为参数执行 promise
    return resolve(x)
  }
}

module.exports = MyPromise
