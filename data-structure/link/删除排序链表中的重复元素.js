/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  const arr = []
  let p = head
  const l = new ListNode(0)
  let pl = l
  while (p) {
    if (!arr.includes(p.val)) {
      arr.push(p.val)
      pl.next = new ListNode(p.val)
      pl = pl.next
    }
    p = p.next
  }
  return l.next
}

const head = new ListNode(0)
let p = head
const arr = [1,1,2,3,3]
arr.forEach(item => {
	p.next = new ListNode(item)
	p = p.next
})

deleteDuplicates(head.next)
