// 手写instanceof
function ins(a, F) {
	const t = F.prototype
	let p = Object.getPrototypeOf(a)
	while (p) {
		console.log(p, t)
		if (p === t) {
			return true
		}
		p = Object.getPrototypeOf(p)
	}
	return false
}

const a = {}

const top = {}

function P() { }

P.prototype = top

const b = Object.create(top)

console.log(ins(a, P))
console.log(ins(b, P))