var exist = function(board, word) {
    let search = ''
    let holder = ''
    let visited = {};

    function BFS (i, j, subStr) {
        // Base Case
        visited[[i, j]] = board[i][j]
        search += board[i][j];
        if (search === word) {
            holder = search
        }
        // BFS:
        // Go Down
        if (i + 1 < board.length && board[i + 1][j] === subStr[0] && !visited[i + 1, j]) {
            BFS(i + 1, j, subStr.slice(1))
        }
        // Go Right
        if (j + 1 < board[i].length && board[i][j + 1] === subStr[0] && !visited[i, j + 1]) {
            BFS(i, j + 1, subStr.slice(1))
        }
        // Go Up
        if (i - 1 >= 0 && board[i - 1][j] === subStr[0] && !visited[i - 1, j]) {
            BFS(i - 1, j, subStr.slice(1))
        }
        // Go Left
        if (j - 1 >= 0 && board[i][j - 1] === subStr[0] && !visited[i, j - 1]) {
            BFS(i, j - 1, subStr.slice(1))
        }
        return holder
    }

    for (let i = 0; i < board.length; i ++) {
        for (let j = 0; j < board[i].length; j ++) {
            if (board[i][j] === word[0]) {
                let test = BFS(i, j, word.slice(1));
                if (test === word) {
                    return true
                };
                search = ''
            }
        }
    }
    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "ABCB"
console.log(exist(board, word));
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
word = "ABCCED";
console.log(exist(board, word));
