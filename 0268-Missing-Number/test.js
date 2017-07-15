var test = require( 'tape' );
var missingNumber = require( './main' );

test( 'Missing Number', function( t ) {
    t.equal( missingNumber([0]), 1, '[0]');
    t.equal( missingNumber([0, 1]), 2, '[0, 1]');
    t.equal( missingNumber([1, 2]), 0, '[1, 2]');
    t.equal( missingNumber([3,2,0]), 1, '[3,2,0]');

    t.end();
} )
