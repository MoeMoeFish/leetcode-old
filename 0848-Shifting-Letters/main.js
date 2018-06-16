/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    let ret = []
    for (let i = S.length - 1, m = shifts[shifts.length - 1];i >= 0;i--,m = (m + shifts[i]) % 26) {
        ret.unshift(String.fromCharCode((S.charCodeAt(i) - 'a'.charCodeAt(0) + m) % 26 + 'a'.charCodeAt(0)))
    }

    return ret.join('')
};

module.exports = shiftingLetters