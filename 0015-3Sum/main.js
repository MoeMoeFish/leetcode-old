/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    nums = nums.sort()
    let rv = []

    for (let i = 0;i < nums.length - 1;i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let target = 0 - nums[i]

        if (target < 0) {
            return rv
        }

        let j = i + 1, k = nums.length - 1
        while(j < k) {
            console.log('#', i, j, k, nums[i], nums[j], nums[k])
            while (k < nums.length - 1 && nums[k] === nums[k + 1]) {
                k--
            }
            while (j > i + 1 && nums[j] === nums[j - 1]) {
                j++
            }
            if (nums[j] + nums[k] > target) {
                k--
            } else if (nums[j] + nums[k] < target) {
                j++
            } else {
                console.log('@', i, j, k, nums[i], nums[j], nums[k])
                rv.push([nums[i], nums[j], nums[k]])
                j++
                k--
            }

        }
    }

    return rv
};

module.exports = threeSum