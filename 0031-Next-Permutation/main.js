/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function sort(arr, i1, i2) {
    for (let i = i1;i < i2;i++) {
        for (j = i2 - 1;j > i;j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
    }
}

function swap(arr, i1, i2) {
    temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
}

var nextPermutation = function(nums) {
    if (nums.length === 0 || nums.length === 1) {
        return
    }

    let i = nums.length - 2
    let curr = 0
    while(i >= 0 && nums[i] >= nums[i + 1]) {
       i--
    }

    if (i === -1) {
        nums.reverse()
        return
    }

    curr = nums[i]
    let j = i + 1 
    let i2 = nums.length - 1
    for (let k = nums.length - 1;k > i;k--) {
        if (nums[k] > curr && nums[k] < nums[j]) {
            j = k
        }
    }
    swap(nums, i, j)
    if (i < nums.length - 2) {
        sort(nums, i + 1, nums.length)
    }
};

module.exports = nextPermutation