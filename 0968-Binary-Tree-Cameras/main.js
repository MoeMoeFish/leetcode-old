let res = 0;

var minCameraCover = function(root) {
    res = 0;

    if (!root) {
        return 0;
    } else if (!root.left && root.right) {
        return 1;
    }

    findMin(root);

    return res;
};

let findMin = function(node) {
    if (!node.left && !node.right) {
        return 0;
    }
    
    let left = 0;
    if (node.left) {
        left = findMin(node.left);
    }

    let right = 0;
    if (node.right) {
        right = findMin(node.right);
    }

    if (left === 0 || right === 0) {
        res++;
        return 1;
    }

    if (left === 1 || right === 1) {
        return 2;
    }

    if (left === 2 || right === 2) {
        return 0;
    }
    
}

