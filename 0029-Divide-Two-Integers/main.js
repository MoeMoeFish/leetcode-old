/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = 1
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        sign = -1
    }

    dividend = dividend < 0 ? ~dividend + 1 : dividend
    divisor = divisor < 0 ? ~divisor + 1 : divisor

    if (dividend < divisor || dividend === 0) {
        return 0
    }

    let result = 0
    while(dividend >= divisor) {
        let tmp = divisor
        let count = 0
        while (dividend >= tmp) {
            dividend -= tmp
            count++
            tmp = tmp << 1
        }

        result += ~(~0 << count)
    }

    if (sign === -1) {
        result = ~result + 1
    }

    return result
};

module.exports = divide