/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length

    if (len1 > len2) {
        let tmp = nums1
        nums1 = nums2
        nums2 = tmp
        len1 = nums1.length
        len2 = nums2.length
    }
    console.log('nums1: ', nums1, 'nums2: ', nums2)

    let total = len1 + len2
    let iMin = 0, iMax = len1, all = Math.floor((total + 1) / 2 )

    while(iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2)
        let j = all - i
        console.log('i = ', i, ', j = ', j)
        
        if (i < len1 && nums2[j - 1] > nums1[i]) {
            iMin = i + 1
            continue
        }
        else if (i > 0 && nums1[i - 1] > nums2[j]) {
            iMax = i - 1
            continue
        } else {
            let n1Small = 0, n1Big = Number.MAX_SAFE_INTEGER, n2Small = 0, n2Big = Number.MAX_SAFE_INTEGER

            if (i > 0) {
                n1Small = nums1[i - 1]
            }
            if (i < len1) {
                n1Big = nums1[i]
            }
            if (j > 0) {
                n2Small = nums2[j - 1]
            }
            if (j < len2) {
                n2Big = nums2[j]
            }

            console.log('n1Small = ', n1Small, 'n1Big = ', n1Big, 
        'n2Small = ', n2Small, 'n2Big = ', n2Big)

            if (total % 2 === 1) {
                return Math.max(n1Small, n2Small)
            } else {
                return (Math.max(n1Small, n2Small) + Math.min(n1Big, n2Big)) / 2.0
            }
        } 
    }

    throw Error('invalid branch 2')
}

module.exports = findMedianSortedArrays