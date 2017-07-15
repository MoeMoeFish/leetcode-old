const test = require('tape')
const algo = require('./main.js')

test('Two Sum', function(t) {
  t.same(algo([2,7,11,15], 9), [0,1])
  t.end()
})
