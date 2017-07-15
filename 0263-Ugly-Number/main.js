var isUgly = function(num) {
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
	
	if ( checked ) {
		return isUgly( num );
	}
	
	return false;
};

module.exports = isUgly;