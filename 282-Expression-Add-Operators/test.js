var eao = require( './main.js' );
var test = require( 'tape' );

// test( 'Expression Add Operator', function( t ) {
// 	t.deepEqual( eao( "123", 6 ), ["1+2+3", "1*2*3"] );
// 	t.end();
// } );

test( 'Expression Add Operator', function( t ) {
	t.deepEqual( eao( "123", 6 ), ["1+2+3", "1*2*3"] );
	t.deepEqual( eao( "232", 8 ), ["2*3+2", "2+3*2"] );
	t.deepEqual( eao( "105", 5 ), ["1*0+5","10-5"] );
	t.deepEqual( eao( "00", 0 ), ["0+0", "0-0", "0*0"] );
	t.deepEqual( eao( "3456237490", 9191 ), [] );
	t.end();
} );