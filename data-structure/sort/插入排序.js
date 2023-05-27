const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i

    while (j > 0) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
      j -= 1
    }

    arr[j] = temp
  }
  return arr
}
const a = [1, 23, 4, 2, 45, 52, 23, 1, 213, 12, 23, 12]
console.log(insertSort(a))
