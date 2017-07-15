var ListNode = require('./node.js')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var cur1 = l1
  var cur2 = l2
  var carry = 0

  var rv = null
  var cur = null

  while(cur1 != null || cur2 != null || carry === 1) {
    n1 = cur1 != null ? cur1.val : 0
    n2 = cur2 != null ? cur2.val : 0

    num = n1 + n2 + carry;
    if (num > 9) {
      num = num % 10
      carry = 1
    } else {
      carry = 0
    }

    var node = new ListNode(num);
    if (rv === null) {
      rv = node
      cur = node
    } else {
      cur.next = node
      cur = node
    }

    if (cur1 != null) {
      cur1 = cur1.next
    }

    if (cur2 != null) {
      cur2 = cur2.next
    }
  }

  return rv
};

module.exports = addTwoNumbers

