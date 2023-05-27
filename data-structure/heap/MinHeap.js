class MinHeap {
	constructor() {
		this.heap = []
	}
	swap(i1, i2) {
		const temp = this.heap[i1]
		this.heap[i1] = this.heap[i2];
		this.heap[i2] = temp;
	}
	getParentIndex(index) {
		return (index - 1) >> 1
	}
	getLeftChildIndex(index) {
		return index * 2 + 1
	}
	getRightChildIndex(index) {
		return index * 2 + 2
	}
	shiftDown(index) {
		const leftIndex = this.getLeftChildIndex(index);
		const rightIndex = this.getRightChildIndex(index);
		if (this.heap[leftIndex] < this.heap[index]) {
			this.swap(leftIndex, index);
			this.shiftDown(leftIndex)
		}
		if (this.heap[rightIndex] < this.heap[index]) {
			this.swap(rightIndex, index);
			this.shiftDown(rightIndex)
		}
	}
	shiftUp(index) {
		if (index === 0) {
			return
		}
		const parentIndex = this.getParentIndex(index)
		if (this.heap[parentIndex] > this.heap[index]) {
			this.swap(parentIndex, index)
			this.shiftUp(parentIndex)
		}
		const temp = this.heap[index]
	}
	insert(value) {
		this.heap.push(value)
		this.shiftUp(this.heap.length - 1)
	}
	pop() {
		this.heap[0] = this.heap.pop()
		this.shiftDown(0)
	}
	peek() {
		return this.heap[0];
	}
	size() {
		return this.heap.length;
	}
}

var findKthLargest = function (arr, k) {
	const h = new MinHeap()
	arr.forEach((item) => {
		h.insert(item)
		if (h.size() > k) {
			h.pop()
		}
	})
	return h.peek()
};

findKthLargest([3, 2, 1, 5, 6, 4], 2)