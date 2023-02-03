var spiralOrder = function(matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;

    const results = [];
    const size = matrix.length * matrix[0].length;

    while (results.length < size) {
        for (let i = left; i <= right && results.length < size; i ++) {
            results.push(matrix[top][i])
        }
        top ++;
        for (let i = top; i <= bottom && results.length < size; i ++) {
            results.push(matrix[i][right]);
        }
        right --;
        for (let i = right; i >= left && results.length < size; i--) {
            results.push(matrix[bottom][i]);
            
        }
        bottom --;
        for (let i = bottom; i >= top && results.length < size; i --) {
            results.push(matrix[i][left]);
        }
        left ++;
    }
    return results;
};

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
