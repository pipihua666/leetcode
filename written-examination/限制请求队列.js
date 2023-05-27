class PromiseQueue {
	constructor(tasks = [], fn = () => { }, limit = 0) {
		this.tasks = tasks;
		this.fn = fn;
		this.limit = limit;
		this.queue = []
	}

	shouldRun() {
		return this.tasks.length && this.queue.length < this.limit
	}

	run() {
		while (this.shouldRun()) {
			const task = this.tasks.shift();
			this.queue.push(() => this.fn(task))
			if (this.queue.length) {
				const currentRun = this.queue.shift();
				currentRun().then(() => {
					this.run()
				})
			}
		}
	}
}

const task = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const fn = (arg) => {
	return new Promise((resolve, reject) => {
		console.log(arg)
		resolve()
	})
}
const limit = 3
const promiseQueue = new PromiseQueue(task, fn, limit);
promiseQueue.run()