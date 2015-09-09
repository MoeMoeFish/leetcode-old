/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function( citations ) {
    var buffer = [];
    var length = citations.length;
    var retVal = 0;
    
    for ( var i = 0; i <= length; i++ ) {
        buffer[ i ] = 0;
    }
        
    for ( var i = 0;i < length; i++ ) {
        var h = citations[i]; 
        if ( h < 0 ) {
            ++buffer[ 0 ]; 
        } else if ( h > length ) {
            ++buffer[ length ]; 
        } else {
            ++buffer[ h ];
        }
    }
    
    var total = 0;
    for ( var i = Number(length); i >= 0; i-- ) {
        total += buffer[i];
        
        if ( total >= i ) {
            return i;
        }
    }
    
    return retVal;
};


module.exports = hIndex;
