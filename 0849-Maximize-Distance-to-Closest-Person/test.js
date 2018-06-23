const tape = require('tape')
const algo = require('./main')

tape('Maximize Distance to Closest Person', (t)=> {
    t.equal(algo([1,0,0,0,1,0,1]), 2)
    t.equal(algo([1,0,0,0]), 3)
    t.end()
})