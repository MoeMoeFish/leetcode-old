var hIndex = require( './main.js' );
var test = require( 'tape' );


test( 'h-index', function( t ) {
	t.equal(hIndex([]), 0, '[]' );
	t.equal(hIndex([0]), 0, '[0]' );
	t.equal(hIndex([0, 0]), 0, '[0, 0]');
	t.equal(hIndex([3, 3, 3]), 3, '[3, 3, 3]' );
	t.equal(hIndex([1, 2, 3]), 2, '[1, 2, 3]' );
	t.equal(hIndex([1, 2, 3, 3, 3, 3, 3, 4, 5]), 3, '[1, 2, 3, 3, 3, 3, 3, 4, 5]' );
	t.equal(hIndex([1, 2, 4, 4, 5]), 3, '[1, 2, 3, 4, 4, 5]' );
	t.equal(hIndex([11, 15]), 2, '[11, 15]' );
	t.end();	
} );


