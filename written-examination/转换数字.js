// 转化100000 为100,000

const convert = num => {
  if (typeof num !== 'number') {
    return 0
  }
  const reverseNumArr = String(num).split('').reverse()
  const resultArr = []
  reverseNumArr.forEach((item, index) => {
    if ((index + 1) % 3 === 0 && index !== reverseNumArr.length - 1) {
      resultArr.push(item, ',')
    } else {
      resultArr.push(item)
    }
  })
  return resultArr.reverse().join('-').replace(/-/g, '')
}

console.log(convert(10000012312321))
