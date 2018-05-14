const tape = require('tape')
const algo = require('./main')

tape('Divide Two Integers', (t) => {
//    t.equal(algo(10, 3), 3)
//    t.equal(algo(7, -3), -2)
//    t.equal(algo(-1, 1), -1)
//    t.equal(algo(2147483647, 1), 2147483647)
//    t.equal(algo(2147483647, 2), 1073741823)
//    t.equal(algo(-2147483648, 2), -1073741824)
    t.equal(algo(1100540749, -1090366779), -1)
    t.end()
})