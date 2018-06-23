const tape = require('tape')
const algo = require('./main')

tape('3Sum', (t) => {
    // t.deepEqual(algo([-1, 0, 1, 2, -1, -4]), [[-1, 0, 1],[-1, -1, 2]])
    // t.deepEqual(algo([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]), [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]])
    t.deepEqual(algo([-2,0,0,2,2]), [[-2,0,2]])
    t.end()
})
