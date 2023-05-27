// 字典，以键值对的形式存储唯一值

const map = new Map()

// 增
map.set('name', 'pipihua')

// 删
map.delete('name')

// 删除所有
map.clear()

// 改
map.set('name', 666)

//查
map.has('name')

// 增 
map.set('age', 123)

// 字典大小
console.log(map.size)

// 获取指定键的值
map.get('name')

// 遍历
map.forEach((value, key) => { console.log(value, key); })

// Array -> Map
new Map([['name', 1], ['age', 2]])

// Map -> Array
Array.from(Map)