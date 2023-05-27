/**	
 * 代理模式
 * 1. 使用者无权访问目标对象
 * 2. 中间加代理，通过代理做授权和控制
 */

class Target{
	constructor(action){
		this.action = action;
	}

	getAction(){
		return this.action
	}
}

class Proxy{
	constructor(target){
		this.target = target
	}

	show(){
		const targetAction = this.target.getAction();
		if(targetAction === '篮球'){
			console.log('蔡徐坤')
		}else {
			console.log('梅西')
		}
	}
}

const target = new Target('足球')
const proxy = new Proxy(target)
proxy.show()