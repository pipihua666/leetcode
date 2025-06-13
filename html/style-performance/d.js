import "./e.js"

function test() {
	for (let i = 0; i < 1000; i++) {
		const arr = []
		for (let j = 0; j < 1000; j++) {
			arr.push(j)
		}
		const res = arr.filter((item) => item % 2 === 0)
	}
}