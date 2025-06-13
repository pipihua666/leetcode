// const obj = {
// 	[Symbol.iterator]: function () {
// 		return {
// 			next: function () {
// 				return { value: 1, done: true }
// 			}
// 		}
// 	}
// }

// const none = {}

// for (let item of obj) {
// 	console.log(item)
// }

// for (let item of none) {
// 	console.log(item)
// }

String
let str = 'test'
let iterFun = str[Symbol.iterator]
let iterator = str[Symbol.iterator]()
let first = iterator.next() // 等效于 let [first] = 'test'
console.log(iterFun, iterator, first)
// 打印
// [Function: [Symbol.iterator]], {}, { value: 't', done: false }

// Array
// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();

// // 以下等效于 let [first, second, third, four] = ['a', 'b', 'c']
// let first = iter.next() // { value: 'a', done: false }
// let second = iter.next() // { value: 'b', done: false }
// let third = iter.next() // { value: 'c', done: false }
// let four = iter.next() // { value: undefined, done: true }

// console.log(first, second, third, four)


let myIterable = {
	[Symbol.iterator]: function* () {
		yield 1;
		yield 2;
		yield 3;
		return 4
	}
};

for (let x of myIterable) {
	console.log(x);
}

// 或者采用下面的简洁写法

let obj = {
	*[Symbol.iterator]() {
		yield 'hello';
		yield 'world';
	}
};

for (let x of obj) {
	console.log(x);
}

function* helloWorldGenerator() {
	yield 'a'
	yield 'b'
	return 'c'
}

var hw = helloWorldGenerator();

console.log(hw)
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
