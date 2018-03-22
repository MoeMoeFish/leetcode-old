/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (p === '') {
        return s === '' 
    }

    let s0 = s.length > 0 ? s[0] : ''

    if (p.length > 1 && p[1] === '*') {
        if (isMatch(s, p.substr(2, p.length - 2))) {
            return true
        }

        if (s0 !== '' && (p[0] === '.' || s0 === p[0])) {
            return isMatch(s.substr(1, s.length - 1), p) 
            || isMatch(s.substr(1, s.length - 1), p.substr(2, p.length - 2))
        }

        return false

    } else {
        if (s0 !== '' && (p[0] === '.' || s0 === p[0])) {
            return isMatch(s.substr(1, s.length - 1), p.substr(1, p.length -1))
        } else {
            return false
        }
    }

};


module.exports = isMatch