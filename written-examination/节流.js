const debounce = (fn, wait) => {
  let timeout = null
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn(args)
    }, wait)
  }
}

const debounceQuick = () => {
  let timeout = null
  return (...args) => {
    if (timeout === null) {
      fn(...args)
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      timeout = null
    }, wait)
  }
}
