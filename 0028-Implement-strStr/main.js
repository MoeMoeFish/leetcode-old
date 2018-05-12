/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }

    if (haystack.length < needle.length) {
        return -1
    }

    let i = 0
    let j = 0
    let table = getNext(needle)
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++
            j++

            if (j === needle.length) {
                return i - needle.length
            }
        } else {
            j = table[j]    
            if (j === -1) {
                i++
                j++
            }
        }
    }

    function getNext(pattern) {
        let ret = []
        ret[0] = -1

        let i = 1
        let j = 0
        while (i < pattern.length) {
            if (pattern[i] === pattern[j]) {
                ret[i] = ret[j]
            } else {
                ret[i] = j

                j = ret[j]
                while (j > 0 && pattern[i] !== pattern[j])  {
                    j = ret[j]
                }
            }

            i++
            j++
        }

        return ret
    }

    return -1
};

module.exports = strStr