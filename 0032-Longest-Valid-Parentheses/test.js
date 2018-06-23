const tape = require('tape')
const algo = require('./main')

tape('Longest Valid Parentheses', (t) =>{
    t.equal(algo('(()'), 2)
    t.equal(algo(')()())'), 4)
    t.equal(algo('()'), 2)
    t.equal(algo('(()())'), 6)

    t.end()
})