const tape = require('tape')
const algo = require('./main')

tape('Implement strStr()', (t) => {
    t.equal(algo('a', ''), 0)
    t.equal(algo('aabc', 'abc'), 1)
    t.equal(algo('hello', 'll'), 2)
    t.equal(algo('aaaaa', 'bba'), -1)
    t.end()
})