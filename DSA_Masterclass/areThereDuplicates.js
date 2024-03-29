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


/*
Time Complexity: O(n log n)
*/
/*
1. The function takes in an arbitrary number of arguments.
2. The arguments are sorted.
3. The function loops through the arguments and checks if the current argument is equal to the previous argument.
4. If the current argument is equal to the previous argument, then there are duplicates.
5. If the current argument is not equal to the previous argument, then there are no duplicates.
6. The function returns true if there are duplicates and false if there are no duplicates.
*/
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