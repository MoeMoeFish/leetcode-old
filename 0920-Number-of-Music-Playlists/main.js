var numMusicPlaylists = function(N, L, K) {
    let mod = 10 ** 9 + 7;

    let store = {};

    for (let i = K + 1; i <= N; i++) {
        for (let j = i; j <= L; j++) {
            let res = 0;

            if (i === K + 1 || j === i) {
                res = factorial(i);
            } else {
                let keyL1 = createKey(i, j - 1);
                let keyL1N1 = createKey(i - 1, j - 1);
                res = store[keyL1] * (i - K) + store[keyL1N1] * i;
            }

            res = res % mod;
            let key = createKey(i, j);

            store[key] = res;
        }
    }

    let key = createKey(N, L);
    return store[key];
};

const factorial = function(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

const createKey = function(n, l) {
    return n.toString() + '-' + l.toString();
};


module.exports = numMusicPlaylists;
