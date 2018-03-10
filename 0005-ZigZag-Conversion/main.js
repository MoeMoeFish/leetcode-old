/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }

    let newColumns = 2 * numRows - 2
    let len = s.length

    let ret = ''
    for (let i = 0;i < numRows;i++) {
        let j = i
        let hasMiddle = true
        if (i === 0 || i === numRows - 1) {
            hasMiddle = false
        }
        
        while (true) {
            if (j >= len) {
                break
            }
            ret += s[j]

            if (hasMiddle) {
                let middle = j + (newColumns - i * 2)

                if (middle >= len) {
                    break
                }
                
                ret += s[middle]
            }

            j += newColumns
        }
    }

    return ret
}

module.exports = convert