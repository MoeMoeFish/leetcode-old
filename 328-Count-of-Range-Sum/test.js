var cors = require( './cors.js' );
var test = require( 'tape' );

console.log( typeof cors );

test( 'Count of Range Sum', function( t ) {
    t.equal( cors([-2, 5, -1], -2, 2), 3, "[-2, 5, -1]")
    t.end();
} );