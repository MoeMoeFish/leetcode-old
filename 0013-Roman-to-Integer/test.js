const tape = require('tape')
const algo = require('./main')

tape('Roman to Integer', (t) => {
    t.equal(algo('III'), 3)
    t.equal(algo('IV'), 4)
    t.equal(algo('IX'), 9)
    t.equal(algo('LVIII'), 58)
    t.equal(algo('MCMXCIV'), 1994)
    t.end()
})