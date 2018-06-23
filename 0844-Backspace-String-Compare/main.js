/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let i = S.length
    let j = T.length

    let result = true
    for (i = S.length, j = T.length;i >= 0 || j >= 0;i--,j--) {
        let vi = ''
        for (let count = 0;i >= 0;i--) {
            if (S[i] !== '#') {
                if (!count) {
                    vi = S[i]
                    break
                }
                count--
            } else {
                count++
            }
        }

        let vj = ''
        for (let count = 0;j >= 0;j--) {
            if (T[j] !== '#') {
                if (!count) {
                    vj = T[j]
                    break
                }
                count--
            } else {
                count++
            }
        }
        // console.log(i, vi, j, vj)
        
        if (vi !== vj) {
            result = false
            break
        }
    }

    return result
};

module.exports = backspaceCompare