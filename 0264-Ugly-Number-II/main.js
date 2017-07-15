/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	var twoIndex = 0;
	var threeIndex = 0;
	var fiveIndex = 0;
	
	var twoCurr = 1;
	var threeCurr = 1;
	var fiveCurr = 1;
	
	var num = 1;	
	var buffer = [ 1 ];
	
	while( num < n ) {
		twoCurr = 2 * buffer[twoIndex];
		threeCurr = 3 * buffer[threeIndex];
		fiveCurr = 5 * buffer[fiveIndex];
		
		var min = minNumber( twoCurr, threeCurr, fiveCurr );
		
		if ( min === twoCurr ) {
			twoIndex++;
		} else if ( min === threeCurr ) {
			threeIndex++;
		} else if (min === fiveCurr ) {
			fiveIndex++;
		} else {
			//throw 
		}
		
		if ( buffer.indexOf( min ) !== -1 ) {
			continue;
		}
		
		buffer.push( min );
		num++;
	}
	
	return buffer.pop();
}

var minNumber = function( arg1, arg2, arg3 ) {
	var min = arg1 <= arg2 ? arg1 : arg2;
	
	if ( arg3 < min ) {
		min = arg3;
	}
	
	return min;
}


module.exports = nthUglyNumber;

