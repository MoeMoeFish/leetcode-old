/**
 *  * @param {string} s
 *   * @return {number}
 *    */
var lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0
  }

  let len = s.length
  let left = 0
  let max = 0
  let dict = {}

  for (let right = 0;right < len;right++) {
    let curr = s[right]
    let old = dict[curr]
    if (typeof old === 'undefined' || old < left) {
      max = Math.max(max, right - left + 1)
    } else {
      max = Math.max(max, right - old)
      left = old + 1
    }

    dict[curr] = right
  }

  return max

};

module.exports = lengthOfLongestSubstring
