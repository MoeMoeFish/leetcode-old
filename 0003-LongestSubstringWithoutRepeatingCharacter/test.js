const tape = require('tape')
const algo = require('./main.js')

tape('Longest Substring Without Repeating Characters', function(t){
  t.equal(algo('abcabcbb'), 3)
  t.equal(algo('bbbbb'), 1)
  t.equal(algo('pwwkew'), 3)
  t.equal(algo('abba'), 2)
  t.equal(algo('tmmzuxt'), 5)
  t.end()
})
