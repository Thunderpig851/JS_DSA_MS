// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string 
// form a subsequence of the characters in the second string. In other words, 
// the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

/*
Time Complexity: O(n)
*/
function isSubsequence(string1, string2) {
    //two pointers
    //string2 is known to be longer
    let i = 0;
    let j = 0;
    //loop through 2
    while (i < string2.length - 1) {
        // if i has progressed past the length of string1
        if (i === string1.length - 1) {
            //return true
            return true;
        }
        //outer bounds
        if (j > string2.length - 1) {
            return false;
        }
        if (string1[i] === string2[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return false;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)