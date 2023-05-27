/**
 * 对给定的版本号数组排序，第一位权重最高，依次递推
 * ["2.5.11.12","3","3.0.3","0.13.0","1.2","1.2.39222.4"]
 */

const sortVersions = arr => {
  return arr.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')
    const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length

    for (let i = 0; i < maxLength; i++) {
      const item1 = parseInt(arr1[i] || 0)
      const item2 = parseInt(arr2[i] || 0)
      if (item1 > item2) {
        return 1
      } else if (item1 < item2) {
        return -1
      }
    }
    return 0
  })
}

console.log(
  sortVersions(['2.5.11.12', '3', '3.0.3', '0.13.0', '1.2', '1.2.39222.4'])
)
