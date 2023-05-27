// 遍历json的所有节点值

const json = {
  a: {
    b: {
      c: 1
    }
  },
  d: [1, 2, 3],
  c: '1'
}

const dfs = (root, path = []) => {
  console.log(root, path)

  Object.keys(root).forEach(k => {
    if (typeof root[k] === 'object') {
      dfs(root[k], [...path, k])
    } else {
      console.log(root[k], path)
    }
  })
}

dfs(json)
