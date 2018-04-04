const tape = require('tape')
const algo = require('./main')

tape('container with most water', (t) => {
    t.equal(algo([1,2,4,3]), 4)
    t.equal(algo([1,1]), 1)
    t.equal(algo([1,2]), 1)
    t.end()
})