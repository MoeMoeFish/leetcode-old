// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 2^31 - 1.

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
	var result = "";
	
	var billion = Math.floor( num / 1000000000 );
	if ( billion ) {
		result = numberToWords( billion ) + ' Billion';
		
		var billionRemain = num % 1000000000;
		if ( billionRemain ) {
			result += ' ' + numberToWords( billionRemain );
		}
		
		return result;
	}
	
	var million = Math.floor( num / 1000000 );
	if ( million ) {
		result = numberToWords( million ) + ' Million';
		
		var millionRemain = num % 1000000;
		if ( millionRemain ) {
			result += ' ' + numberToWords( millionRemain );
		}
		
		return result;
	}
	
	var thousand = Math.floor( num / 1000 );
	if ( thousand ) {
		result = numberToWords( thousand ) + ' Thousand';
		
		var thousandRemain = num % 1000;
		if ( thousandRemain ) {
			result += ' ' + numberToWords( thousandRemain );
		}
		
		return result;
	}

	var hundred = Math.floor( num / 100 );
	if ( hundred ) {
		var hundredRemain = num % 100;
		
		result = numberToWords( hundred ) + ' Hundred';
		if ( hundredRemain ) {
			result += ' ' + numberToWords( hundredRemain );
		}
		
		return result;
	}
	
	switch(num) {
		case 1:
			return "One";
		case 2:
			return "Two";
		case 3:
			return "Three";
		case 4:
			return "Four";
		case 5:
			return "Five";
		case 6:
			return "Six";
		case 7:
			return "Seven";
		case 8:
			return "Eight";
		case 9:
			return "Nine";
		case 10:
			return "Ten";
		case 11:
			return "Eleven";
		case 12:
			return "Twelve";
		case 13:
			return "Thirteen";
		case 14:
			return "Fourteen";
		case 15:
			return "Fifteen";
		case 16:
			return "Sixteen";
		case 17:
			return "Seventeen";
		case 18:
			return "Eighteen";
		case 19:
			return "Nineteen";
		case 20:
			return "Twenty";
		case 30:
			return "Thirty";
		case 40:
			return "Forty";
		case 50:
			return "Fifty";
		case 60:
			return "Sixty";
		case 70:
			return "Seventy";
		case 80:
			return "Eighty";
		case 90:
			return "Ninety";
		case 0:
			return "Zero";
	}
	
	if ( num > 20 ) {
		var tenBit = Math.floor( num / 10 );
		var tenBitRemain = num % 10;
		result = numberToWords( tenBit * 10 );
		
		if ( tenBitRemain ) {
			result += ' ' + numberToWords( tenBitRemain );
		}
		
		return result;
	}
	
	return '';
};





// testing
var test = require( 'tape' );

test( "Integer to English Words", function( t ) {
	t.equal(numberToWords(4), "Four", "Test 1");
	t.equal(numberToWords(14), "Fourteen", "Test 14");
	t.equal(numberToWords(34), "Thirty Four", "Test 34");
	t.equal(numberToWords(123), "One Hundred Twenty Three", "Test 123");
	t.equal(numberToWords(12345), "Twelve Thousand Three Hundred Forty Five", 'Test 12345');
	t.equal(numberToWords(1234567), "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven", "Test 1234567");
	t.end();
} );