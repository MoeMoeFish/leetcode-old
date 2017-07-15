/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var length = nums.length;
    if ( length < 1) {
        return 0;
    }

    nums.push( length );

    for (var i = 0;i < length;i++) {
        missingNumberInner( nums[i], nums );
    }

    for (var i = 0;i < (length + 1);i++) {
        if ( -1 !== nums[i] ) {
            return i;
        }
    }

    return 0;
};

var missingNumberInner = function( val, nums ) {
    var next = nums[val];

    nums[ val ] = -1;
    if ( val === next || next === -1 ) {
        return;
    }
    
    missingNumberInner( next, nums );
}

module.exports = missingNumber;

