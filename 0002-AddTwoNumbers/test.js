const test = require('tape')
const algo = require('./main.js')
const ListNode = require('./node.js')

test('add two numbers', function(t) {
  let l243 = createdList([2, 4, 3])
  let l564 = createdList([5, 6, 4])
  t.deepEqual(toArray(algo(l243, l564)), [7,0,8])

  t.end()
})

function toArray(list) {
  let arr = []
  if (!list) {
    return arr
  }
  
  curr = list
  while(curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  return arr
}

function createdList(arr) {
  let list = null
  let curr = null
  for (let i in arr) {
    let num = arr[i]

    let node = new ListNode(num)

    if (!list) {
      list = node
      curr = node
    } else {
      curr.next = node
      curr = node
    }
  }

  return list
  
}
