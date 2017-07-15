/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function( num, target ) {
    var result= [];
    
    if ( num.length == 0 ) {
        return result;    
    }
    
    //var number1 = parseInt( num.substr( 0 , 1 ))
    helper( num, target, result, '', 0, 0, 0);
    
    return result;
};

/**
 * @param {int} num
 * @param {number} target
 * @param {number} target
 * @param {string[]} result
 * @param {string} record
 * @param {number} position
 * @param {number} pre
 * @param {number} multipled
 * @return {void}
 */
var helper = function( num, target, result, record, position, pre, multipled ) {
    //console.log( 'record = ' + record + ' pre = ' + pre );
    if ( position === num.length && pre === target ) {
        result.push( record );
        return;
    }
    
    for (var i = position; i < num.length; i++ ) {
        if ( i != position && num[position] === '0' ) {
            break;
        }
        
        var next = parseInt( num.substr(position, i - position + 1 ) );
        //console.log( 'next = ' + next + ' pre = ' + pre );
        if ( position === 0 ) {
            helper( num, target, result, next.toString(), i + 1, next, next );
            continue;
        }
        
        
        helper( num, target, result, record + '+' + next, i + 1, pre + next, next );
        helper( num, target, result, record + '-' + next, i + 1, pre - next, next * -1 );
        helper( num, target, result, record + '*' + next, i + 1, ( pre - multipled ) + ( multipled * next ) , multipled * next );
    }
}

module.exports = addOperators;