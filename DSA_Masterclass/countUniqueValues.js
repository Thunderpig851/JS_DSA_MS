//use multiple pointers
// 0(n) time complexity | 0(1) space complexity
// solution maintains space complexity by reordering the unique elements to the beginning

function countUniqueValues(array){
    let current = 0;
    let scout = 1;
    if (array.length === 0) {
        return 0;
    }
    while (scout < array.length) {
        // if left and scout are equal increment j
        if (array[current] === array[scout]) {
            scout++;
        //if they are not set array[current] = scout
        //increment current by 1
        } else {
            current++;
            array[current] = array[scout]
        }
    }
    //return count + 1 to correct for zero index
    return current + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5])); //5
console.log(countUniqueValues([1, 1, 3, 4, 5])); //4
console.log(countUniqueValues([1, 1, 1, 4, 5])); //3
console.log(countUniqueValues([1, 1, 1, 1, 5])); //2
console.log(countUniqueValues([1, 1, 1, 1, 1])); //1
console.log(countUniqueValues([-1, -2, 0, 4, 5, 5, 5, 5, 7, 7, 8, 8, 9])); //8