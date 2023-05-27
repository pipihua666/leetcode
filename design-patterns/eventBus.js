class EventBus {
  constructor() {
    this.events = {}
  }

  on(type, cb) {
    if (this.events[type]) {
      this.events[type].push(cb)
    } else {
      this.events[type] = [cb]
    }
  }

  emit(type) {
    if (this.events[type]) {
      const that = this
      this.events[type].forEach(fn => {
        fn()
        if (fn.once) {
          that.remove(type, fn)
        }
      })
    }
  }

  remove(type, cb) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter(fn => fn !== cb)
    }
  }

  once(type, cb) {
    cb.once = true
    this.on(type, cb)
  }
}

const bus = new EventBus()
bus.on('one', () => {
  console.log(1111)
})

bus.emit('one')
bus.once('two', () => {
  console.log(2)
})
bus.once('two', () => {
  console.log(22)
})
console.log(bus.events)
bus.emit('two')
console.log(bus.events)
