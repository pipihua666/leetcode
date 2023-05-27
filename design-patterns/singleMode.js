/**
 * 单例模式
 * 1. 系统中被唯一使用
 * 2. 一个类只有一个实例
 */

class Single{
	constructor(name){
		this.name = name;
		this.instance = null
	}

	static getInstance(name){
		if(!this.instance){
			this.instance = new Single(name)
		}
		return this.instance
	}

	getName(){
		console.log(this.name)
	}
}

class Other{
	constructor(){}
}

const single1 = Single.getInstance('实例1')
single1.getName()
const single2 = Single.getInstance('实例2')
single2.getName()
console.log(single1 === single2)
console.log(single1 === single2)

// 参照一下
const other = new Other()
console.log(single1 === other)