const tape = require('tape')
const algo = require('./main')

tape('Longest Common Prefix', (t) => {
    t.equal(algo(['a', 'ab']), 'a')
    t.equal(algo(['aac', 'aaab', 'aaaaaaaaedadf']), 'aa')
    t.end()
})