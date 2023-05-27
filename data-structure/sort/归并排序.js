const mergeSort = arr => {
  if (arr.length === 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid, arr.length)
  const leftSort = mergeSort(leftArr)
  const rightSort = mergeSort(rightArr)
  const res = []

  while (leftSort.length || rightSort.length) {
    if (leftSort.length && rightSort.length) {
      res.push(
        leftSort[0] < rightSort[0] ? leftSort.shift() : rightSort.shift()
      )
    } else if (leftSort.length) {
      res.push(leftSort.shift())
    } else if (rightSort.length) {
      res.push(rightSort.shift())
    }
  }

  return res
}

const a = [1, 23, 4, 2, 45, 52, 23, 1, 213, 12, 23, 12]

mergeSort(a)
