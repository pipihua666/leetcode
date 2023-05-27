/**	
 * 迭代器模式
 */

class Iterator{
	constructor(container){
		this.list = container.list
		this.index = 0
	}
	hasNext(){
		return this.index < this.list.length
	}
	next(){
		if(this.hasNext()){
			return this.list[this.index++]
		}
		return null
	}
}

class Container{
	constructor(list){
		this.list = list
	}
	getIterator(){
		return new Iterator(this)
	}
}

const container = new Container([1,2,3,666])
const iterator = container.getIterator()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())