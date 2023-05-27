## 分而治之 D&C

> 并非可用于解决问题的算法，而是一种解决问题的思路

1. 找出简单的基线条件；
2. 确定如何缩小问题的规模，使其符合基线条件

## 快速排序

> 思想是：在长度>=2 的数组中随机取出一个数组项 A，把 A 大的项放在右边，比 A 小的项放在左边，依次类推。

代码实现：

```ts
const quickSort = (arr: number[]) => {
  if (arr.length < 2) {
    return arr // 基线条件，为空或者长度为1的数组是有序的，不用再排序
  }
  const lessArr = [] // 比基线值小的项
  const moreArr = [] // 比基线值大的项
  const pivot = arr.shift() // 选择基准值(随机)
  arr.forEach(item => {
    if (item >= pivot) {
      moreArr.push(item)
    } else {
      lessArr.push(item)
    }
  })
  return [...quickSort(lessArr), pivot, ...quickSort(moreArr)]
}
```

## JS 的 sort 方法

> V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数组长度小于等于 22 的用插入排序 InsertionSort，比 22 大的数组则使用快速排序 QuickSort。源码中这样写道：

```js
// Quicksort is used for arrays which length > 22
// Arrays which length > 1000 guarantee GetThirdIndex is executed
```

[源码链接](https://github.com/v8/v8/blob/dc712da548c7fb433caed56af9a021d964952728/test/mjsunit/array-sort.js)

## 小结

- 使用 D&C 处理列表的时候，基线条件很可能是空数组或只包含一个元素的数组
- 实现快速排序时，请随机选择用作基准值的元素。快速排序的平均运行事件 `O(nlogn)`
- 大 O 表示法中的常量有时候事关重大，这就是快排比归并排序快的原因所在
- 比较简单查找和二分查找时，常量几乎无关紧要，因为列表很长时，`O(logn)`要比`O(n)`快得多
