/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (n === 0) {
		return 0;
	}
	
	if ( resultArray[n] ) {
		return resultArray[n];
	}
	
	var numS = [];
	var i = 1;
	var square = i * i;
	while ( square <= n ) {
		numS[i] = 1 + numSquares( n - square );
		i++;
		square = i * i;
	}
	resultArray[n] = min( numS );
	return resultArray[n];
};

var resultArray = [];

function min( nums ) {
	var retVal = Number.MAX_SAFE_INTEGER;
	for (var i = 0; i < nums.length; i++ ) {
		if (nums[i] < retVal) {
			retVal = nums[i];
		}
	}
	
	return retVal;
}

module.exports = numSquares;
