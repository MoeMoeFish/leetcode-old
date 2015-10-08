 var moveZeroes = function(nums) {
     var zIndex = nums.length;
     var j = zIndex;
     
     for ( j = nums.length - 2; j >= 0; j-- ) {
         
         if ( nums[j] !== 0 ) {
             continue;
         }
         
         for ( var i = j; i < zIndex - 1; i++ ) {
             nums[i] = nums[i + 1];
         }
         nums[ zIndex - 1 ] = 0;
         zIndex--;
     }
};

module.exports = moveZeroes;
