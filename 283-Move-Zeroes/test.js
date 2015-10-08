var mz = require( './main.js' );
var test = require( 'tape' );


test( 'Move Zeroes', function( t ) {
	t.equal(  mz([0, 1, 0, 3, 12]),  [1, 3, 12, 0, 0], ' [0, 1, 0, 3, 12]' );
	t.end();
} );