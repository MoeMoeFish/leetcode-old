const TreeNode = require('./treeNode');

let parse = function(arr, curr, height) {
    if (curr >= arr.length) {
        return null;
    }
}

module.exports = function(arr) {
    if (!arr || arr.length) {
        return null;
    }

    return parse(arr, 0, 1);
}


