async function func() {
  console.log(2)
  return 1
}

// await返回的是promise，后面的代码放在第二个then
// await返回的不是promise，后面的代码放在第一个then
async function test() {
  console.log(1)
  await func()
  console.log(3)
}

test()
console.log(4)

new Promise(resolve => {
  console.log('B')
  resolve()
})
  .then(() => {
    console.log('C')
  })
  .then(() => {
    console.log('D')
  })
  .then(() => {
    console.log('E')
  })
  .then(() => {
    console.log('F')
  })

Promise.resolve().then(() => {
  console.log('G')
})
