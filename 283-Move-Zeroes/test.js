var mz = require( './main.js' );
var test = require( 'tape' );


test( 'Move Zeroes', function( t ) {
	var nums = [0, 1, 0, 3, 12];
	mz( nums );
	t.deepEqual(  nums,  [1, 3, 12, 0, 0], ' [0, 1, 0, 3, 12]' );
	t.end();
} );