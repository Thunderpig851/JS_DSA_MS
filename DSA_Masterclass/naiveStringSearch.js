// return the number of times smallString occurs in largeString

function stringSearch(largeString, smallString) {
    let count = 0;
    for (let i = 0; i < largeString.length; i ++) {
        for (let j = 0; j < smallString.length; j ++) {
            if (smallString[j] !== largeString[i + j]) {
                break;
            }
            if (j === smallString.length - 1) {
                count ++;
            }
        }
    }
    return count;
};

console.log(stringSearch('this is a long sentence','sentence')); // 1
console.log(stringSearch('omgomgomgomg','omg')); // 4
console.log(stringSearch('this is a long sentence this','this')); // 2
console.log(stringSearch('this is a long sentence','archive')); // 0