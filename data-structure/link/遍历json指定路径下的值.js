// 使用链表指针遍历json

const json = {
  a: {
    b: {
      c: 1
    }
  },
  d: 2
}

const path = ['a', 'd']

let p = json

path.forEach(k => {
  p = p[k]
})
