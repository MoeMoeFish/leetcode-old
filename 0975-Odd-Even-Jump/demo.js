let a = [3,7,10,100,20,104,3,200,10];

let res = a.map((ele, i) => {
    return {
        key: ele,
        val: i
    }
}).sort((e1, e2) => {
    return e1.key - e2.key;
});

let stack = [];
let higher = {};

console.log('half', res);

for (let i = res.length - 1; i >= 0; i--) {
    let item = res[i];

    if (stack.length === 0) {
        stack.push(item);
        continue;
    }

    let last = stack.pop();

    if (last.val > item.val) {
        higher[item.key] = last;
        stack.push(item);
    } else {
        stack.push(last);
        stack.push(item);
    }
}

console.log('111', res, higher);

