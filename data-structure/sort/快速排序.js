const a = [1, 23, 4, 2, 45, 52, 23, 1, 213, 12, 23, 12]

const quickSort = (arr = []) => {
  if (arr.length < 2) return arr
  const first = arr.shift()
  const less = []
  const more = []
  arr.forEach(item => {
    if (item < first) {
      less.push(item)
    } else {
      more.push(item)
    }
  })
  return [...quickSort(less), first, ...quickSort(more)]
}

console.log(quickSort(a))
