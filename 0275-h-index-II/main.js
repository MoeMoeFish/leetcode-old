/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function( citations ) {
	if (citations.length == 0) {
		return 0;
	}
	
	return hIndexInner(citations, 0, citations.length - 1 );
};

function hIndexInner( citations, begin, end ) {
	var middle = Math.floor( (begin + end) / 2 );
	
	if ( begin >= end ) {
		middle = begin;
	}
	
	var indexNum = citations.length - middle;
	
	var cValue = citations[ middle ];
	
	if ( begin >= end ) {
		return indexNum > cValue ? indexNum - 1 : indexNum;
	}
	
	if (cValue === indexNum ) {
		return cValue;
	}
	
	if ( indexNum > cValue ) {
		return hIndexInner( citations, middle + 1, end);
	} else {
		return hIndexInner( citations, begin, middle - 1);
	}
}




module.exports = hIndex;
