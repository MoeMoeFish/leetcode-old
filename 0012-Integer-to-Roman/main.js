/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
   let ans = ''

   let thousand = Math.floor(num / 1000)
   ans += romanNumberForUnit(thousand, 'M', '', '')

   num = num % 1000
   let hundred = Math.floor(num / 100)
   ans += romanNumberForUnit(hundred, 'C', 'D', 'M')

   num = num % 100
   let ten = Math.floor(num / 10)
   ans += romanNumberForUnit(ten, 'X', 'L', 'C')

   num = num % 10
   ans += romanNumberForUnit(num, 'I', 'V', 'X')

   return ans
};

let romanNumberForUnit = function(num, oneText, fiveText, tenText) {
    let rv = ''

    if (num <= 0) {
        return rv
    } else if (num < 4) {
        for (let i = 0;i < num;i++) {
            rv += oneText
        }

        return rv
    } else if (num > 5 && num < 9) {
        rv = fiveText

        let len = num - 5
        for (let i = 0;i < len;i++) {
            rv += oneText
        }

        return rv
    }
    else if (num === 4) {
        return oneText + fiveText
    } else if (num === 5) {
        return fiveText
    } else { // num === 9
        return oneText + tenText
    }
}

module.exports = intToRoman