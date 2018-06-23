const tape = require('tape')
const algo = require('./main')

tape('Reverse Integer', function(t) {
    t.equal(algo(123), 321)
    t.equal(algo(-123), -321)
    t.end()
})