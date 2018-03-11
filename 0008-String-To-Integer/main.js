/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 0x7FFFFFFF
const INT_MIN = -0x80000000
const INT_DICT = {
    '0': true,
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true
}

var myAtoi = function(str) {
    let rv = 0

    let begin = false
    let sign = 1

    for (let i = 0;i < str.length;i++) {
        let char = str[i]

        if (char === ' ') {
            if (begin) {
                break
            }

            continue
        }
        
        if (char === '+' || char === '-') {
            if (begin) {
                break
            }

            begin = true
            sign = char === '+' ? 1 : -1
            continue
        }

        if (INT_DICT[char]) {
            begin = true
            let num = char.charCodeAt(0) - 48
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