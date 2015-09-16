var test = require( 'tape' );
var nthUglyNumber = require( './main' );

test( 'Ugly Number II', function( t ) {
	t.equal(nthUglyNumber(1), 1, '1');
	t.equal(nthUglyNumber(2), 2, '2');
	t.equal(nthUglyNumber(3), 3, '3');
	t.equal(nthUglyNumber(4), 4, '4');
	t.equal(nthUglyNumber(5), 5, '5');
	t.equal(nthUglyNumber(6), 6, '6');
	t.equal(nthUglyNumber(7), 8, '7');
	t.equal(nthUglyNumber(8), 9, '8');
	t.equal(nthUglyNumber(9), 10, '9');
	t.equal(nthUglyNumber(10), 12, '10');
	t.end();
} );