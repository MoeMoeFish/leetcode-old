const tape = require('tape')
const algo = require('./main')

tape('String to Integer', function(t) {
    t.equal(algo('-123'), -123)
    t.equal(algo('123'), 123)
    t.equal(algo('    010'), 10)
    t.equal(algo('    -010'), -10)
    t.equal(algo('123  456'), 123)
    t.end()
})