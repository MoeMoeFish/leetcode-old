/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	buffer = [];
	var num = 0;
	var i = 0;
	while (num < n) {
		i++;
		if ( isUgly(i) ) {
			num++;
		}
		
	}
	
	return i;
};

var isUgly = function(num) {
	if (buffer[ num ] !== undefined) {
		console.log( 'check buffer' );
		return buffer[num];
	}
	
	if ( num === 0 ) {
		return false;
	} 
	
	var checked = false;
    if ( num % 2 === 0 ) {
		num = num / 2;
		checked = true;
	} else if ( num % 3 === 0 ) {
		num = num / 3;
		checked = true;
	} else if ( num % 5 === 0 ) {
		num = num / 5;
		checked = true;
	}
	
	
	if ( num === 1 ) {
		return true;
	}
	
	var result = false;
	if ( checked ) {
		result = isUgly( num );
	} else {
		result = false;
	}
	
	buffer[num] = result; 
	return result
};

var buffer = [];

module.exports = nthUglyNumber;
