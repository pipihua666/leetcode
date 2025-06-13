// 手写new关键字

function newFunc(func, ...args) {
	if (typeof func !== 'function') {
		return
	}
	const p = func.prototype
	const o = Object.create(p)
	const r = func.apply(o, args)
	const i = typeof r === 'object' || typeof r === 'function'
	return i ? r : o
}

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.o = () => {
		console.log('0')
	}
	return '123'
}

const p = {
	global: true,
	say() {
		console.log('hello')
	}
}

Person.prototype = p

console.log(newFunc(Person, 'pipi', 2))