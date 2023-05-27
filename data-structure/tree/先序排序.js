// 先序遍历，根 -> 左 -> 右
const tree = {
  val: '1',
  left: {
    val: '2',
    right: null
  },
  right: {
    val: '3',
    left: {
      val: '4',
      left: {
        val: '6',
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: '5',
      left: null,
      right: null
    }
  }
}

// const first = root => {
//   if (!root) return
//   console.log(root.val)
//   first(root.left)
//   first(root.right)
// }
// first(tree) // 1 2 3 4 6 5

// 1. 访问栈顶元素
// 2. 输出栈顶元素的值，再把右节点入栈，左节点入栈
// 3. 当栈不为空，重复1,2步骤
const cycleFirst = tree => {
  if (!tree) return
  const stack = [tree]
  while (stack.length) {
    const head = stack.pop()
    console.log(head.val)
    if (head.right) {
      stack.push(head.right)
    }
    if (head.left) {
      stack.push(head.left)
    }
  }
}
cycleFirst(tree)
