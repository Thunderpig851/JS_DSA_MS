var search = function(numbers, target) {
    // get a start
    let start = 0;
    // get an end
    let end = numbers.length;
    
    // while start < end
    while (start < end) {
        // get the middle 
        let middle = Math.floor(((start + end) / 2))
        // if middle is target 
        if (numbers[middle] === target) {
            //return true
            return middle;
            // if middle is larger 
        } else if (numbers[middle] > target) {
            // search the right half
            end = middle;
            // if middle is smaller
        } else {
            start = middle + 1;
        }
    }
    //return false
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 3))
console.log(search([-1,0,3,5,9,12], 2))
console.log(search([5], 5))