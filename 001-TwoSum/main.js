/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var dict = {}

  for (var key in nums) {
    var num = nums[key]
    var other = target - num

    var otherIndex = dict[other]
    if (otherIndex && otherIndex !== key)
    {
      return [parseInt(otherIndex), parseInt(key)]
    }

    dict[num] = key
  }

  return []
}

module.exports = twoSum
