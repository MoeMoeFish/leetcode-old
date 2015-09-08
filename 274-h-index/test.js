var hIndex = require( './main.js' );
var test = require( 'tape' );


test( 'h-index', function( t ) {
	t.equal(hIndex([]), 0, '[]' );
	t.equal(hIndex([3, 3, 3]), 3, '[3, 3, 3]' );
	t.equal(hIndex([1, 2, 3]), 2, '[1, 2, 3]' );
	t.end();	
} );


