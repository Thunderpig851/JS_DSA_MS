var updateMatrix = function(matrix) {
    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < matrix[i].length; j ++) {
            if (matrix[i][j] !== 0) {
                matrix[i][j] = Infinity;
            }
        }
    }
    return matrix;
};

const result = updateMatrix([[0,0,0],[0,1,0],[0,0,0]]);
result.forEach(item => {
    console.log(item)
})
//    y0  y1  y2
// x0 [0, 0, 0]
// x1 [0, 1, 0]
// x2 [1, 1, 1]

// [0, 0, 0]
// [0, 1, 0]
// [1, 2, 1]