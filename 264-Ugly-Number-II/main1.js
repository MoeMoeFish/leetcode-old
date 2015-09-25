/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	numb = 0;
	var num = 0;
	var i = 0;

	while (num < n) {
		i++;
		var result = isUgly(i);
		buffer[ i ] = result;
		if ( result ) {
			num++;
		}
	}
	
	//console.log(numb);
	return i;
};

var isUgly = function(num) {
	numb++;
	if (buffer[ num ] !== undefined) {
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
	
	return result
};

var buffer = [];
var numb = 0;

module.exports = nthUglyNumber;
