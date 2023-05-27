/**
 * 1. 右指针一直移动，直到覆盖全部的子串
 * 2. 左指针一直移动到最小子串的位置
 */

var minWindow = function (s, t) {
  const map = new Map()
  let l = 0
  let r = 0
  let needSize = t.length
  let res = ''
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.get(t[i]) ? map.get(t[i]) + 1 : 1)
  }

  let needSize = map.size

  while (r < s.length) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1)
      if (map.get(s[r]) >= 0 && needSize > 0) {
        needSize -= 1
      }
    }

    while (needSize === 0) {
      const subString = s.substring(l, r + 1)
      if ((subString && subString.length < res.length) || !res) {
        res = subString
      }
      if (map.has(s[l])) {
        map.set(s[l], map.get(s[l]) + 1)
        if (map.get(s[l]) > 0) {
          needSize += 1
        }
      }
      l += 1
    }
    r += 1
  }

  return res
}
