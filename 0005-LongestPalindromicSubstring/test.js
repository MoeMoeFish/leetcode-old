const tape = require('tape')
const algo = require('./main.js')

tape('Longest Palindromic Substring', function(t) {
  t.equal(algo('babad'), 'bab')
  t.equal(algo('cbbd'), 'bb')
  t.end()
})
