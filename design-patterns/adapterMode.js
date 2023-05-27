/**	
 * 适配器模式（相当于我们的胶水代码）
 * 1. 旧接口模式和使用者不兼容
 * 2. 中间加个适配转换接口
 */

class Target {
	constructor(type) {
		this.type = type;
	}

	specificRequest() {
		return this.type
	}
}

class Adapter {
	constructor(target, place) {
		this.target = target;
		this.place = place
	}

	request() {
		const targetType = this.target.specificRequest()
		console.log(`targetType is made in ${this.place}`)
	}
}

const target = new Target('空调')
const adapter1 = new Adapter(target, 'china')
const adapter2 = new Adapter(target, 'usa')
adapter1.request()
adapter2.request()