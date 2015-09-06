// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 2^31 - 1.

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
	
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
		default:
			return '';
	}	
};





// testing
var test = require( 'tape' );

test( "Integer to English Words", function( t ) {
	t.equal(numberToWords(4), "Four", "Test 1");
	t.equal(numberToWords(123), "One Hundred Twenty Three", "Test 123");
	t.equal(12345, "Twelve Thousand Three Hundred Forty Five", 'Test 12345');
	t.equal(1234567, "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven", "Test 1234567");
	t.end();
} );