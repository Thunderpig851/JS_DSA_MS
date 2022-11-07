// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2){
    // create holder objects
    let num1Obj = {};
    let num2Obj = {};
    // string numbers 0(n)
    let string1 = String(num1);
    let string2 = String(num2);
    
    if (string1.length !== string2.length) {
        return false;
    }
    // loop over one num
    for (let i = 0; i < string1.length; i++) {
        let current1 = string1[i];
        let current2 = string2[i];
        // build out objects of num1/num2
        if (num1Obj[current1]) {
            num1Obj[current1] += 1;
        } else {
            num1Obj[current1] = 1;
        }
        if (num2Obj[current2]) {
            num2Obj[current2] += 1;
        } else {
            num2Obj[current2] = 1;
        }
    }
    // return compared objects as boolean
    return JSON.stringify(num1Obj) === JSON.stringify(num2Obj);
};


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false