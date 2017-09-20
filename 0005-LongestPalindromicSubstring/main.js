/**
 * @param {string} s
 *  * @return {string}
 *   */

var start = 0
var len = 1

var longestPalindrome = function(s) {
  start = 0
  len = 1

  if (s.length < 2) {
    return s
  }
  
  for (var i = 0;i < s.length - 1;i++) {
    calculate(s, i, i)
    calculate(s, i, i + 1)
  }

  return s.substr(start, len)

};

function calculate(s, begin, end) {
  while (begin >= 0 && end < s.length && s[begin] === s[end]) {
    begin--
    end++
  }

  begin++
  end--

  if (len < end - begin + 1) {
    start = begin
    len = end - begin + 1
  }
}

module.exports = longestPalindrome;
