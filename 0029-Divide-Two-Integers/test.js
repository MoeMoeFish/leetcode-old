const tape = require('tape')
const algo = require('./main')

tape('Divide Two Integers', (t) => {
    // t.equal(algo(10, 3), 3)
    // t.equal(algo(7, -3), -2)
    t.equal(algo(-1, 1), -1)
    t.end()
})