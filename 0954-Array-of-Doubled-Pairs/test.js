const tape = require('tape');
const algo = require('./main');

tape('954. Array of Doubled Pairs', function(t) {
    t.equal(algo([3,1,3,6]), false);
    t.equal(algo([2,1,2,6]), false);
    t.equal(algo([4,-2,2,-4]), true);
    t.equal(algo([1,2,4,16,8,4]), false);
    t.equal(algo([0,0]), true);
    t.equal(algo([2,1,2,1,1,1,2,2]), true);
    t.equal(algo([1,2,4,8]), true);

    t.end();
});
