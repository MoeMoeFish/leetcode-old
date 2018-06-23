const tape = require('tape')
const algo = require('./main')


tape('Integer to Roman', function(t) {
    t.equal(algo(1), 'I')
    t.equal(algo(14), 'XIV')
    t.equal(algo(47), 'XLVII')
    t.equal(algo(116), 'CXVI')
    t.equal(algo(1120), 'MCXX')
    t.equal(algo(1914), 'MCMXIV')
    t.end()
})