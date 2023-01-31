var numIslands = function(grid) {
  
    let count = 0;

    const isIsland = (i, j) => {
       return( i >= 0 &&
        j >= 0 &&
        i < grid.length &&
        j < grid[i].length &&
        grid[i][j] === '1');
    };

    const BFS = (i, j) => {
        const queue = [[i, j]];
        while (queue.length) {

            const [i, j] = queue.shift();
            grid[i][j] = 'X';

            if (isIsland(i + 1, j)) queue.push([i + 1, j]); // Down
            if (isIsland(i, j + 1)) queue.push([i, j + 1]); // Right
            if (isIsland(i - 1, j)) queue.push([i - 1, j]); // Up
            if (isIsland(i, j - 1)) queue.push([i, j - 1]); // Right
        }
    };

    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] === '1') {
                count ++;
                BFS(i, j);
            }
        }
    }

    return count;
};

let grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ] // 1



console.log(numIslands(grid1));
console.log(numIslands(grid2));