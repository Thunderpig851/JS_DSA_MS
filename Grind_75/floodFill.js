var floodFill = function(image, sr, sc, color) {
    const ref = image[sr][sc];
    if (ref === color) return image;

    function BFS(x, y) {
        image[x][y] = color;
        
        if (x - 1 >= 0 && image[x - 1][y] === ref) {
            BFS(x - 1, y);
        }
        if (x + 1 < image.length && image[x + 1][y] === ref) {
            BFS(x + 1, y);
        }
        if (y - 1 >= 0 && image[x][y - 1] === ref) {
            BFS(x, y - 1);
        }
        if (y + 1 < image[x].length && image[x][y + 1] === ref) {
            BFS(x, y + 1);
        }
    }
    BFS(sr, sc)
    return image;
};

const image = [[0,0,0],[0,0,0]];
const sr = 0;
const sc = 0;
const color = 0;

const result = floodFill(image, sr, sc, color) // [[2,2,2],[2,2,],[2,0,1]]
for (let row of result) {
    console.log(row);
}