/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = []
  const left = ['(', '{', '[']
  const right = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (left.includes(char)) {
      arr.push(char)
    }
    if (right[char]) {
      if (arr.length === 0) {
        return false
      }
      const top = arr.pop()
      if (top !== right[char]) {
        return false
      }
    }
  }
  return !!arr.length
}

isValid('()')
