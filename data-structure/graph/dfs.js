const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

const visited = new Set()
const dfs = root => {
  console.log('dfs', root)
  visited.add(root)
  graph[root].forEach(item => {
    if (!visited.has(item)) {
      dfs(item)
    }
  })
}

const visited2 = new Set([])
const bfs = root => {
  const arr = [root]
  visited2.add(root)
  while (arr.length) {
    const top = arr.shift()
    console.log('bfs', top)
    graph[top].forEach(item => {
      if (!visited2.has(item)) {
        arr.push(item)
        visited2.add(item)
      }
    })
  }
}

dfs(0)
console.log('----------')
bfs(0)
