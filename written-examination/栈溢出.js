/**
 * 再惠一面
 * 宏任务和微任务递归调用自身是否会发生栈溢出
 */

const func = () => {
  console.log(11111)
  setTimeout(() => {
    func()
  }, 2000)
}

func()

const promiseDP = () => {
  console.log(2)
  Promise.resolve().then(() => {
    promiseDP()
  })
}
promiseDP()
