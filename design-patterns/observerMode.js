/**
 * 观察者模式
 * 1. 发布-订阅
 * 2. 一对多
 */

// 主题，保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = null
    this.observers = []
  }

  setState(value) {
    this.state = value
    this.emit()
  }

  getState() {
    return this.state
  }

  on(observer) {
    this.observers.push(observer)
  }

  emit() {
    this.observers.forEach(observer => {
      observer.apply()
    })
  }
}

// 创建观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.on(this)
  }

  apply() {
    console.log(`name:${this.name}`)
  }
}

const subject = new Subject()
const observer1 = new Observer('我是观察者1号', subject)
const observer2 = new Observer('我是观察者2号', subject)
const observer3 = new Observer('我是观察者3号', subject)
subject.setState('语文')
