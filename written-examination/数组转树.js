// 数组转化成树形结构，树形结构转化成扁平化数组
const source = [
  {
    id: 0,
    pid: -1,
    name: 'html'
  },
  {
    id: 1,
    pid: 0,
    name: 'body'
  },
  {
    id: 2,
    pid: 1,
    name: 'title'
  },
  {
    id: 3,
    pid: 2,
    name: 'div'
  },
  {
    id: 4,
    pid: 0,
    name: 'div'
  },
  {
    id: 9,
    pid: 4,
    name: 'div'
  }
]

const createTree = (root, arr = []) => {
  const child = arr.filter(item => item.pid === root.id)
  const node = {
    id: root.id,
    pid: root.pid,
    name: root.name,
    children: child.map(item => createTree(item, arr))
  }
  return node
}

const convertToTree = (arr = []) => {
  const root = arr.find(item => item.id === 0)
  if (!root) {
    throw new Error('没有根节点')
  }
  return createTree(root, arr)
}

const arr = []
const dfs = node => {
  arr.push(node)
  node.children.forEach(dfs)
  return arr
}

const bfs = node => {
  const arr2 = [node]
  const result = []
  while (arr2.length) {
    const head = arr2.shift()
    result.push(head)
    arr2.push(...head.children)
  }

  return result
}

const tree = convertToTree(source)
console.log(1, tree)

const arrayDfs = dfs(tree)
console.log(2, arrayDfs)

const arrayBfs = bfs(tree)
console.log(3, arrayBfs)
