/*
Time Complexity: O(n)
*/


function  maxSubArraySum(array, n){ 
    let maxSum = 0;
    let currentSum  = 0;

    if (array.length === 0) {
        return null;
    }
    // get initial sum using n for range
    for (let i = 0; i < n; i++) {
        currentSum += array[i];
        maxSum = currentSum;
    }
    // slide along the array to look for largest sum
    for (let i = 0; i < array.length; i++) {
        // adjust first to avoid double comparison
       currentSum = currentSum - array[i] + array[i + n]
       if (currentSum > maxSum) {
           maxSum = currentSum;
        }
    }
    //return max
    return maxSum;
}



console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubArraySum([4, 2, 1, 6, 2], 1)) // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubArraySum([], 4)) //null


// Naive implementation
// 0(n^2) | slicing and reducing in a loop
// function maxSubArraySum(array, n) {
//     let largest = 0;

//     if (array.length === 0) {
//         return null;
//     }

//     for (let i = 0; i < array.length; i++) {
//         //sub set the window
//         let sub = array.slice(i, n);
//         //sum the sub array
//         let sum = sub.reduce((total, num) => {
//             return total + num;
//         })
//         //if the sub array is greater than largest
//         if (sum > largest){
//             //largest equals sum
//             largest = sum;
//         }
//         //increment n to move window
//         n++;

//     }

//     return largest;
// };
