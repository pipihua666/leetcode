// 中序遍历， 左 -> 根-> 右

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

// const second = root => {
//   if (!root) return
//   second(root.left)
//   console.log(root.val)
//   second(root.right)
// }
// second(tree) // 2 1 6 4 3 5

// 1. 使用指针遍历左子树，把遍历到的节点统统入栈
// 2. 取出栈顶元素并访问节点值，把指针换成右子树重复1步骤
const cycleSecond = root => {
  if (!root) return
  let p = root
  const stack = []
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}

cycleSecond(tree)
