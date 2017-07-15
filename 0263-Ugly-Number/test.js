var test = require( 'tape' );
var isUgly = require( './main' );

test( 'Ugly Number', function( t ) {
	t.ok( isUgly(6), "6" );
	t.ok( isUgly(8), "8" );
	t.notOk( isUgly(14), "14" );
	t.notOk( isUgly(0), "0" );
	t.end();
} );