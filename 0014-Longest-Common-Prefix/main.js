/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    } else if (strs.length === 1) {
        return strs[0]
    }

    let str0 = strs[0]
    let rv = ''

    for (let i = 0;i < str0.length;i++) {
        let c = str0[i]

        for (let j = 1;j < strs.length;j++){
            let str = strs[j]

            if (str.length < i + 1 || str[i] !== c) {
                return rv
            }
        }

        rv += c
    }

    return rv
};

module.exports = longestCommonPrefix