function lengthOfLongestSubstring(s) {
  let l = 0
  let result = 0
  const map = new Map()
  for (let r = 0; r < s.length; r++) {
		const current = s[r]
    if (map.has(current)) {
      l = map.get(current) + 1
    }
    result = Math.max(result,r - l + 1)
    map.set(current, r)
  }
  return result
}

lengthOfLongestSubstring("abbcdea")
