const test = require('tape')
const algo = require('./main.js')

function ListNode(val) {
  this.val = val
  this.next = null
}

test('add two numbers', function(t) {

  t.end()
})


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
