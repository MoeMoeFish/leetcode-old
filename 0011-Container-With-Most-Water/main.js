var maxArea = function(height) {
    let i = 0, j = height.length - 1
    let area = 0

    while(i < j) {
        let fore = height[i], rear = height[j]
        let h = Math.min(fore, rear)
        let newArea = (j - i) * h
        area = Math.max(newArea, area)

        if (fore < rear) {
            i++
        } else {
            j--
        }
    }

    return area
};

module.exports = maxArea