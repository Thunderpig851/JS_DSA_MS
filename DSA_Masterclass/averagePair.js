// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

/*
Time Complexity: O(n)
*/
function averagePair(array, target) {
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        let average =  (array[i] + array[j]) / 2;
        if (average === target) {
            return true
        } else if (average > target) {
            j--;
        } else {
            i ++;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false

// Time: O(n ^ 2) naive approach
// function averagePair(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 1; j < array.length; j++) {
//             if ((array[i] + array[j]) / 2 === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }