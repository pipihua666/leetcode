// 后序遍历， 左 -> 右 -> 根

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

// const third = root => {
//   if (!root) return
//   third(root.left)
//   third(root.right)
//   console.log(root.val)
// }
// third(tree) // 2 6 4 5 3 1

// 1. 创建一个输出栈，把根节点依次入栈
// 2. 右节点入输出栈，左节点再入输出栈
const cycleThird = root => {
  if (!root) return
  const stack = [root]
  while (stack.length) {
    const n = stack.shift()
    outputStack.push(n)
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n.val)
  }
}

cycleThird(tree)
