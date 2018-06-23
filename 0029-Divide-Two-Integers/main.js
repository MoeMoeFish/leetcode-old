/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const min = 1 << 31
    if (dividend === divisor) {
        return 1
    } else if (dividend === ~divisor + 1) {
        return -1
    }

    let oldDividend = dividend
    if (dividend === min) {
        if (divisor === 1) {
            return dividend
        } else if (divisor === -1) {
            return 0x7FFFFFFF
        }

        dividend += 1
    }

    if (divisor === 1) {
        return dividend
    } else if (divisor === -1) {
        return ~dividend + 1
    }

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

            if (tmp >= (1 << 30)) {
                break
            }
            tmp = tmp << 1
        }

        result += ~(~0 << count)
    }

    if (oldDividend === min && dividend + 1 >= divisor) {
        result += 1
    }

    if (sign === -1) {
        result = ~result + 1
    }

    return result
};

module.exports = divide