let a = [3,7,10,100,20,104,3,200,10];

let res = a.map((ele, i) => {
    return {
        key: ele,
        val: i
    }
}).sort((e1, e2) => {
    return e1.key - e2.key;
});

console.log(res);

