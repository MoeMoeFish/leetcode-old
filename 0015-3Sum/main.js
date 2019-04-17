/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    nums = nums.sort((a, b) => {
        return a - b
    })
    let rv = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let target = 0 - nums[i]
        let j = i + 1, k = nums.length - 1

        while (j < k) {
            if (nums[j] + nums[k] === target) {
                rv.push([nums[i], nums[j], nums[k]])
                j++
                while (nums[j] === nums[j - 1]) {
                    j++
                }
                k--
                while (nums[k] === nums[k + 1]) {
                    k--
                }
                continue;
            }
            while (nums[j] + nums[k] > target && j < k) {
                k--
            }
            while (nums[j] + nums[k] < target && j < k) {
                j++
            }
        }
    }

    return rv
};

module.exports = threeSum
