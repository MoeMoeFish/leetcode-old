const tape = require('tape')
const algo = require('./main.js')
console.log(algo)

tape('Shifting Letters', (t) => {
    t.equal(algo('abc', [3,5,9]), 'rpl')
    t.end()
})