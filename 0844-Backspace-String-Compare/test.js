const tape = require('tape')
const algo = require('./main')

tape('Backspace String Compare', (t) => {
    t.equal(algo('ab#c', 'ad#c'), true)
    t.equal(algo('ab##', 'c#d#'), true)
    t.equal(algo('a##c', '#a#c'), true)
    t.equal(algo('a#c', 'b'), false)
    t.equal(algo('xywrrmp', 'xywrrmu#p'), true)
    t.equal(algo('nzp#o#g', 'b#nzp#o#g'), true)

    t.end()
})