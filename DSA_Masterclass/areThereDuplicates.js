// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...args) {
    // two pointers for while loop
    args.sort();
    for (let i = 0; i < args.length; i++) {
        if (args[i] === args[i - 1]) {
            return true;
        }
    }
    return false;
};

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8) )// false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

// function areThereDuplicates(...args) {
//     //loop over array of args 
//     let argObj = {};
//     for (let i = 0; i < args.length; i++) {
//         let current = args[i];
//         if (argObj[current]) {
//             argObj[current] += 1;
//         } else {
//             argObj[current] = 1;
//         }
//     }
//     for (let key in argObj) {
//         if (argObj[key] > 1) {
//             return true;
//         }
//     }
//     return false;
// };