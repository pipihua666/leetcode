// 广度优先遍历
// 1. 新建队列，把根节点放入队列
// 2. 当队列不为空时，出队并访问节点
// 3. 把出队节点的子节点依次入队

const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'c',
          children: [
            {
              val: 'd',
              children: []
            }
          ]
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'f',
      children: []
    }
  ]
}

const bfs = root => {
  const q = [root]
  while (q.length > 0) {
    const head = q.shift()
    console.log(head.val)
    head.children.forEach(child => q.push(child))
  }
}

bfs(tree)
