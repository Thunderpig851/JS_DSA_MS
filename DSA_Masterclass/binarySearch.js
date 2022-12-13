
/*
Time Complexity: O(log n)
*/
function binarySearch(array, target) {
    var low = 0;
    var high = array.length - 1;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            return mid;
        }  
        if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    // base case
    return -1;
};

console.log(binarySearch([1, 4, 7, 9, 19, 21, 71], 9)); // 3
console.log(binarySearch([1, 4, 7, 9, 19, 21, 71], 4)); // 1
console.log(binarySearch([2, 4, 7, 9, 19, 21, 71, 100, 900], 7)); // 2
console.log(binarySearch([1, 4, 7, 9, 19, 21, 71], 2)) // -1