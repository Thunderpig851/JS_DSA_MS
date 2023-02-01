var orangesRotting = function(grid) {

    let minutes = 0;
    let count = 0;
    let totalOranges = 0;

    let queue = []
    
    
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] === 2 || grid[i][j] === 1) {
                totalOranges ++;
            }
            if (grid[i][j] === 2) {
                count ++
                queue.push([i, j])
            }
        }
    }
    
    while (queue.length) {
        const [i, j] = queue.shift();
        let k = queue.length;
        let flag = false;
        while ( k >= 0) {
            if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
                flag = true;
                count ++;
                grid[i][j + 1] = 2;
                queue.push([i, j + 1]);
            }
            if (i + 1 < grid.length && grid[i + 1][j] === 1) {
                flag = true;
                count ++;
                grid[i + 1][j] = 2;
                queue.push([i + 1, j]);
            }
            if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                flag = true;
                count ++;
                grid[i][j - 1];
                queue.push([i, j - 1]);
            }
            if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                flag = true;
                count ++;
                grid[i - 1][j] = 2;
                queue.push([i - 1, j]);
            }
            k --;
        }
        console.log(minutes)
        if (flag) {
            minutes ++;
            flag = false;
        }
    }
    
    return count === totalOranges ? minutes : -1;
};
// console.log(orangesRotting([[1, 2]])); // 1
// console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])) // 4 
// console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); // -1
console.log(orangesRotting([[2,0,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]))

