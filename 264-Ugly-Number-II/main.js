/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	var num = 1;
	var cali = 1;
	
	var dict = { 1 : true }
	var buffer = [ 0, 1 ];
	
	while ( num < n ) {
		var i = cali;
		var min = NaN;
		
		while ( i <= num ) {
			var result = buffer[i] * 2;
			if ( !dict[result] ) {
				if ( less( result, min ) ) {
					min = result;
				} else {
					break;
				}
			}
			
			result = buffer[i] * 3;
			if ( !dict[result] ) {
				if ( less( result, min ) ) {
					min = result;
				}
			}
			
			result = buffer[i] * 5;
			if ( !dict[result] ) {
				if ( less( result, min ) ) {
					min = result;
					if (cali < i) {
						cali = i;
					}
				}
			}
			i++;
		}
		
		dict[min] = true;
		buffer.push( min );
		num++;
	}
	
	return buffer[num];
}

var less = function( left, right ) {
	if ( isNaN( right ) ) {
		return true;
	} else {
		return left < right;
	}
}

module.exports = nthUglyNumber;


