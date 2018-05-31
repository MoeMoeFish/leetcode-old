/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let lens = []

    let leftCount = 0
    let result = 0

    for (let i = 0;i < s.length;i++) {
        if (s[i] === '(') {
            leftCount++
            lens[i] = 0
        } else if (leftCount <= 0) {
            lens[i] = 0
        } else {
            leftCount--
            let len = lens[i - 1] + 2
            if (lens[i - 1] + 1 < i) {
                len += lens[i - lens[i - 1] - 2]
            }
            lens[i] = len

            result = Math.max(result, len)
        }
    }

    return result
    
};

module.exports = longestValidParentheses