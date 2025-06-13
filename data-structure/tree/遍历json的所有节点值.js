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

// const dfs = (root, path = []) => {
//   console.log(root, path)

//   Object.keys(root).forEach(k => {
//     if (typeof root[k] === 'object') {
//       dfs(root[k], [...path, k])
//     } else {
//       console.log(root[k], path)
//     }
//   })
// }

// dfs(json)


const dfs = (root, path = []) => {
  console.log(root, path)

  for (let i in root) {

    if (typeof root[i] === 'object') {
      dfs(root[i], [...path, i])
    } else {
      console.log(root[i], [...path, i])
    }

  }
}

const bfs = (root) => {
  const q = [{ value: root, path: [] }]

  while (q.length) {
    const { value, path } = q.shift()
    console.log(value, path)
    for (let i in value) {
      if (typeof value[i] === 'object') {
        q.push({ value: value[i], path: [...path, i] })
      } else {
        console.log(value[i], [...path, i])
      }
    }
  }
}

// dfs(json)

bfs(json)
