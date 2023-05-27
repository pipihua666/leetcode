/**
 * 两数之和并返回其坐标
 */

const twoSum = (arr, sum) => {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const want = sum - current
    if (map.has(want)) {
      return [map.get(want), i]
    }
    map.set(current, i)
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
