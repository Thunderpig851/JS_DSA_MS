// Recursive Factorial
// Write a function factorial which accepts a number and returns the factorial of that number.
//  A factorial is the product of an integer and all the integers below it; e.g., 
//  factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

/*
Time Complexity: O(n)
*/
function recursiveFactorial(num){
   if (num === 1) {
    return 1;
   } else {
    return num * recursiveFactorial(num - 1);
   }
};

console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(3)); // 6
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120
console.log(recursiveFactorial(6)); // 720
console.log(recursiveFactorial(7)); // 5040
console.log(recursiveFactorial(8)); // 40320
console.log(recursiveFactorial(9)); // 362880
