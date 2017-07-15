let func = require('./main.js');
let test = require('tape');

test( 'Largest Palindrome Product', function( t ) {
  t.equal( 987, func( 2 ) );
  t.end();
} );


