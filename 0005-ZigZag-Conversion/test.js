const tape = require('tape')
const algo = require('./main')

tape('ZigZag Conversion', function(t) {
    t.deepEqual(algo('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR')
    t.deepEqual(algo('ABCDE', 4), 'ABCED')
    t.deepEqual(algo('PAYPALISHIRING', 4), 'PINALSIGYAHRPI')
    t.end()
})
