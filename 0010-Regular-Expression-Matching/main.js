/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let cache = []
    for (let i = 0;i < s.length + 1;i++) {
        cache.push(Array(p.length + 1))
    }
    
    let dp = function(i, j) {
        if (typeof cache[i][j] !== 'undefined') {
            return cache[i][j]
        }
        let res = false
        
        if (j === p.length) {
            res = i === s.length
        } else {
            let match = i < s.length && (p[j] === s[i] || p[j] === '.')
        
            if (j < p.length && p[j+1] === '*') {
                res = dp(i, j + 2) || (match && dp(i + 1, j))
            } else {
                res = match && dp(i + 1, j + 1)   
            }
        }
        
        cache[i][j] = res
        return res
    }
    
    return dp(0, 0)
};

function recursive() {
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


}


module.exports = isMatch