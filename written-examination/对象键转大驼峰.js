// 转换对象的键为大驼峰
// eg: {a_b:123} -> {aB:123}
// eg:{a_b:[{b_c:234}]} -> {aB:[{bC:234}]}

const convert = arg => {
  const a = arg
  Object.keys(a).forEach(item => {
    const newKey = item.replace(/_(\w)/g, (str, p1) => {
      return p1.toLocaleUpperCase()
    })
    if (typeof a[item] === 'object') {
      convert(a[item])
    }
    const value = JSON.parse(JSON.stringify(a[item]))
    delete a[item]
    a[newKey] = value
  })
  return a
}

const B = { a_b: [{ b_c: 234, asd_ddd: 666 }] }

console.log(convert(B))
