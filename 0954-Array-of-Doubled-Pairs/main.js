var canReorderDoubled = function(A) {
    let posArr = [];
    let negArr = [];
    
    A.forEach((val) => {
        if (val < 0) {
            negArr.push(val);
        } else {
            posArr.push(val);
        }
    });

    return isDoubleArray(posArr) && isDoubleArray(negArr);
};

let isDoubleArray = function(arr) {
    if (arr.length === 0) {
        return true;
    }

    if (arr.length % 2 === 1) {
        return false;
    }

    arr = arr.sort();

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] * 2 !== arr[2 * i + 1]) {
            return false;
        }
    }

    return true;
}

module.exports = canReorderDoubled;

