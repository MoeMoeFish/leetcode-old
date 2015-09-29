/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	var twoIndex = 1;
	var threeIndex = 1;
	var fiveIndex = 1;
	
	var twoCurr = 2;
	var threeCurr = 3;
	var fiveCurr = 5;
	
	var num = 1;	
	var buffer = [ 0, 1 ];
	
	var minIndex = 2;
	
	while ( num < n ) {
		if ( twoCurr <= threeCurr ) {
			minIndex = 2;
			if ( fiveCurr < twoCurr ) {
				minIndex = 5;
			}
		} else {
			minIndex = 3;
			if ( fiveCurr < threeCurr ) {
				minIndex = 5;
			}
		}
		
		var current = 0;
		if ( minIndex === 2 ) {
			current = twoCurr;
			buffer.push( twoCurr );
			twoIndex++;
			twoCurr = twoIndex * 2;
		} else if ( minIndex === 3 ) {
			current = threeCurr;
			threeIndex++;
			threeCurr = threeIndex * 3;
		} else if ( minIndex === 5 ) {
			current = fiveCurr;
			fiveIndex++;
			fiveCurr = fiveIndex * 5;
		}
		
		if ( buffer.indexOf( current ) === -1 ) {
			buffer.push( current );
			num++;
		}
	}
	
	
	return buffer[num];
}


module.exports = nthUglyNumber;

