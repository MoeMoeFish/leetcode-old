var test = require( 'tape' );
var perfectSquares = require( './main.js' );

test( 'Perfect Squares', function( t ) {
	t.equal(perfectSquares(12), 3, '12 = 4 + 4 + 4');
	t.equal(perfectSquares(13), 2, '13 = 4 + 9');
	t.end();
} );