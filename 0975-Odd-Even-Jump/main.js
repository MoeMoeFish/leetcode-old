/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
    let stack = [];

    let res = A.map((ele, i) => {
        return {
            key: ele,
            val: i
        }
    }).sort((e1, e2) => {
        return e1.key - e2.key;
    });
    let higher = {};
};

module.exports = oddEvenJumps;

