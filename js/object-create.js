// 手写Object.create

function objectCreate(o) {
	function func() { }
	func.prototype = o
	return new func()
}

p = {
	name: 'p'
}

a = objectCreate(p)

console.log(a, a.__proto__ === p)

// Object.create和new的区别: Object不能调用构造函数进行私有属性和私有方法创建