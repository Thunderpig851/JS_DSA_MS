//takes in an array and number of elements
// sliding window pattern 
// build window out of allowed elements
// slide window along the array to look for largest sum

// 0(n^2) | slicing and reducing in a loop
function maxSubArraySum(array, n) {
    let largest = 0;

    if (array.length === 0) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        //sub set the window
        let sub = array.slice(i, n);
        //sum the sub array
        let sum = sub.reduce((total, num) => {
            return total + num;
        })
        //if the sub array is greater than largest
        if (sum > largest){
            //largest equals sum
            largest = sum;
        }

        //increment n to move window
        n++;

    }

    return largest;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) //17
console.log(maxSubArraySum([4, 2, 1, 6, 2], 1)) //6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4))
console.log(maxSubArraySum([], 4)) //null
