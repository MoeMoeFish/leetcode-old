/**
 *  * @param {number[]} persons
 *   * @param {number[]} times
 *    */


var TopVotedCandidate = function(persons, times) {
    this.leads = {}
    this.times = times

    let top = -1
    let topPerson = -1
    let votes = {}

    for (let i = 0; i < persons.length; i++) {
        let p = persons[p]
        let vote = votes[p] ? votes[p] : 0
        vote += 1
        votes[p] = vote;

        if (vote >= top) {
            this.leads[times[i]] = p
            top = vote
            topPerson = p
        } else {
            this.leads[times[i]] = topPerson
        }
    }
};

/** 
 *  * @param {number} t
 *   * @return {number}
 *    */
TopVotedCandidate.prototype.q = function(t) {
    let p = 0, times = this.times, l = times.length, q = l, 

    while(p <= q) {
        let m = parseInt((p + q) / 2)
        if (t >= times[m] && ((m + 1) >= l || t < times[m + 1])) {
            return this.leads[times[m]]
        }
        if (t < times[m]) {
            q = m - 1
            continue
        } else {
            p = m + 1
            continue
        }
    }
};

/** 
 *  * Your TopVotedCandidate object will be instantiated and called as such:
 *   * var obj = Object.create(TopVotedCandidate).createNew(persons, times)
 *    * var param_1 = obj.q(t)
 *     */

module.exports = TopVotedCandidate
