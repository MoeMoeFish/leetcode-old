/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = 0
    while (x != 0) {
        let last = x % 10
        y = y * 10 + last
        x = parseInt(x / 10)
    }

    if (y > 0x7FFFFFFF || y < -0x80000000) {
        return 0
    }
    return y
};

module.exports = reverse;