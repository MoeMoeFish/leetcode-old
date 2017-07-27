const tape = require('tape')
const algo = require('./main.js')

tape('Median of Two Sorted Arrays', function(t) {
  t.equal(algo([1,3],[2]), 2.0)
  t.equal(algo([1,2],[3,4]), 2.5)
  t.end()
})
