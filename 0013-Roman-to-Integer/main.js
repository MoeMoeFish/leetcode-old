/**
 * @param {string} s
 * @return {number}
 */
let arr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
let dict = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}
var romanToInt = function(s) {
    let ret = 0
    let index = 0
    let strLength = s.length
    for (let i = 0;i < arr.length;i++) {
        if (index >= strLength) {
            break
        }

        let pattern = arr[i]
        let match = true

        for (let j = 0;j < pattern.length;j++) {
            if (pattern.charAt(j) !== s.charAt(index + j)) {
                match = false
            }
        }

        if ((strLength - index < pattern.length) || !match) {
            continue
        }
    
        ret += dict[pattern]
        index += pattern.length

        i--
    }

    return ret

};

module.exports = romanToInt