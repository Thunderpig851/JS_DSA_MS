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
        console.log("GRID: ")
        grid.forEach(row => {
        console.log(row)
        })
        // console.log("QUEUE: ")
        // queue.forEach(item => {
        // console.log(item)
        // })
        const [i, j] = queue.shift();
        let k = queue.length;
        while ( k >= 0) {
            if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
                count ++;
                grid[i][j + 1] = 2;
                queue.push([i, j + 1]);
            }
            if (i + 1 < grid.length && grid[i + 1][j] === 1) {
                count ++;
                grid[i + 1][j] = 2;
                queue.push([i + 1, j]);
            }
            if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                count ++;
                grid[i][j - 1];
                queue.push([i, j - 1]);
            }
            if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                count ++;
                grid[i - 1][j] = 2;
                queue.push([i - 1, j]);
            }
            k --;
        }
        if (queue.length) minutes ++;
    }
    
    return count === totalOranges ? minutes : -1;
};
//console.log(orangesRotting([[1, 2]])); // 1
//console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])) // 4 
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1],[2,0,0]])); // -1

// 211
// 011
// 101

//const BFS = (i, j) => {
    //     const queue = [[i, j]];
    //     while (queue.length) {
            

    //         const [i, j] = queue.shift();

    //         if (i + 1 < grid.length && grid[i + 1][j] === 1) {
    //             grid[i + 1][j] = 2
    //             queue.push([i + 1, j])
    //         }
    //         if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
    //             grid[i][j + 1] = 2
    //             queue.push([i, j + 1])
    //         }
    //         if (i - 1 >= 0 && grid[i - 1][j] === 1) {
    //             queue.push([i - 1, j])
    //         }
    //         if (j - 1 >= 0 && grid[i][j - 1] === 1) {
    //             queue.push([i, j - 1])
    //         }

    //         // console.log("GRID: ")
    //         // grid.forEach(row => {
    //         //     console.log(row)
    //         // })

    //     }
    // };