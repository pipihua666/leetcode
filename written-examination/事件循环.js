// setImmediate(() => {
//   console.log('immediate')
//   Promise.resolve().then(function () {
//     console.log('immediate promise')
//   })
// })
// setImmediate(() => {
//   console.log('immediate2')
//   Promise.resolve().then(function () {
//     console.log('immediate promise2')
//   })
// })

// process.nextTick(() => {
//   console.log('nextTick1')
// })
// process.nextTick(() => {
//   console.log('nextTick2')
// })

setTimeout(() => {
  console.log('timer1')
  Promise.resolve()
    .then(function () {
      console.log('promise1')
    })
    .then(function () {
      console.log('promise6')
    })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise3')
  })
  .then(() => {
    console.log('promise4')
  })
Promise.resolve().then(function () {
  console.log('promise5')
})
