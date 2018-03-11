/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 0x7FFFFFFF
const INT_MIN = -0x80000000

var myAtoi = function(str) {
    let rv = 0

    let sign = 1

    let i = 0
    while(str[i] === ' ') {
        i++
    }

    if (str[i] === '+' || str[i] === '-') {
        sign = str[i] === '+' ? 1 : -1
        i++
    }

    for (;i < str.length;i++) {
        let char = str[i]

        if (char.charCodeAt() >= '0'.charCodeAt() && char.charCodeAt() <= '9'.charCodeAt()) {
            let num = char.charCodeAt(0) - '0'.charCodeAt()
            rv = rv * 10 + sign * num 

            if (rv > INT_MAX) {
                return INT_MAX
            } else if (rv < INT_MIN) {
                return INT_MIN
            } else {
                continue
            }
        } else {
            break
        }
    }

    return rv
};

module.exports =  myAtoi