/**	
 * 装饰器模式
 * 1. 为对象添加新功能
 * 2. 不改变其原有的结构和功能
 */

class Circle{
	draw(){
		console.log('这是一个圆形')
	}
}

class Decorator{
	constructor(circle){
		this.circle = circle;
	}

	draw(){
		this.circle.draw()
		this.setCircleRedBorder()
	}

	setCircleRedBorder(){
		console.log('设置圆形边框为红色')
	}
}

const circle = new Circle()
const decorator = new Decorator(circle)
decorator.draw()