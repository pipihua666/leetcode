// currying(1,2) === 3
// currying(1,2,3) = 6
// currying(1,2,3)(4) = 10
// currying(1)(2)(3)(4) = 10

const getSum = (...args) => {
  return args.reduce((sum, las) => sum + las)
}

function curry(func) {
  const result = []
  return function cb(...args) {
    if (args.length === 0) {
      return func(...result)
    }
    result.push(...args)
    return cb
  }
}

const curry1 = curry(getSum)

console.log(curry1(1)(2)(3)(4, 5, 6)())
