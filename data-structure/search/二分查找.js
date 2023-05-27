Array.prototype.binarySearch = function (target) {
  let low = 0
  let high = this.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const current = this[mid]

    if (target > current) {
      low = mid + 1
    } else if (target < current) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return -1
}

console.log([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].binarySearch(2))
