const tape = require('tape');
const algo = require('./main');

tape('Number of Music Playlists', function(t) {
    t.equal(algo(3, 3, 1), 6);
    t.equal(algo(2, 3, 0), 6);
    t.equal(algo(2, 3, 1), 2);
    t.equal(algo(3, 4, 1), 18);
    t.equal(algo(25, 28, 5), 906368459);
    t.end();
});

