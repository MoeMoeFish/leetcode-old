
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad

 */


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var begin = 1;
        var end = n;
        var middle = Math.floor( 1 + n );
        
        while (begin < end) {
            middle = Math.floor( begin + end );
            if ( isBadVersion( middle ) ) {
                end = middle - 1;
                continue;
            } else {
                begin = middle + 1;
                continue;
            }
        }
        
        if ( isBadVersion( middle )) {
            return middle;    
        }
        
        return middle + 1;
    };
};


 var isBadVersion = function(version) {
     return true;
 };
 
 
 module.exports = solution;
 