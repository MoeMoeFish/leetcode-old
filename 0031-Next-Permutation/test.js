const tape = require('tape')
const algo = require('./main')

tape('Next Permutation', (t) => {
    let arr = [1,2,3]
    algo(arr)
    t.deepEqual(arr, [1,3,2])

    arr = [3,2,1]
    algo(arr)
    t.deepEqual(arr, [1,2,3])

    arr = [1,1,5]
    algo(arr)
    t.deepEqual(arr, [1,5,1])

    arr = [1,3,2]
    algo(arr)
    t.deepEqual(arr, [2,1,3])

    arr = [5,1,1]
    algo(arr)
    t.deepEqual(arr, [1,1,5])

    t.end()
})