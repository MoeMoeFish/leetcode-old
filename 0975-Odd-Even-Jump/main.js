/**
 * @param {number[]} A
 * @return {number}
 */
let createComparer = function(arr) {
    let stack = [];
    let comparer = [];
    for (let i = res.length - 1; i >= 0; i--) {
        let item = res[i];

        if (stack.length === 0) {
            stack.push(item);
            continue;
        }

        let last = stack.pop();

        if (last.val > item.val) {
            comparer[item.key] = last;
            stack.push(item);
        } else {
            stack.push(last);
            stack.push(item);
        }
    }

    return comparer;
};

var oddEvenJumps = function(A) {
    let stack = [];

    // create higher array
    let res = A.map((ele, i) => {
        return {
            key: ele,
            val: i
        }
    }).sort((e1, e2) => {
        return e1.key - e2.key;
    });

    let higher = createComparer(res);

    res = A.map((ele, i) => {
        return {
            key: ele,
            val: i
        }.sort((e1, e2) => {
            return e2.key - e1.key;
        });
    });

    let lower = createComparer(res);

    let higherResult = {};
    let lowerResult = {};

};

module.exports = oddEvenJumps;

