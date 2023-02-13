var generateMatrix = function(n) {
    let top = 0;
    let left = 0;
    //Only concerned about a square
    let bottom = n - 1;
    let right = n - 1;

    let matrix = Array(n).fill(Array(n).fill(0)).map(a => a.slice());
    const size = n * n + 1;
    let j = 1;
    
    while (j < size){
        for (let i = left; i <= right && j < size; i ++) {
            matrix[top][i] = j;
            j ++
        }
        top ++;
        for (let i = top; i <= bottom && j < size; i ++) {
            matrix[i][right] = j;
            j ++
        }
        right --;
        for (let i = right; i >= left && j < size; i --) {
            matrix[bottom][i] = j;
            j ++;
        }
        bottom --
        for (let i = bottom; i >= top && j < size; i --) {
            matrix[i][left] = j;
            j ++;
        }
        left ++;
    }
    return matrix
};


let input = 3
let result = generateMatrix(3) // Output: [[1,2,3],[8,9,4],[7,6,5]]
result.forEach(row => {
    console.log(row);
})
