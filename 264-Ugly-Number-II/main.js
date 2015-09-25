/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
	var num = 1;
	var cali = 1;
	
	while ( num < n ) {
		var i = cali;
		var min = NaN;
		
		while ( i <= num ) {
			var isEnd = true;
			var result = buffer[i] * 2;
			if ( !dict[result] ) {
				isEnd = false;
				
				if ( isMin( min, result ) ) {
					min = result;
				}
			}
			
			if ( isEnd ) {
				cali++;	
			}
			
			i++;
		}
		
		buffer.push( min );
		num++;
	}
}

var isMin = function(min, compare) {
	if ( isNaN(min) ) {
		return true;
	} else {
		return compare < min;
	}
}

var dict = { 1 : true }
var buffer = [ 1 ];
