// Recursive Power
// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function recursivePower(base, exponent){
    // base case
    if (exponent === 1) {
        return base;
    } else {
        return recursivePower(base * base, exponent - 1);
    }
};

console.log(recursivePower(1, 2)); // 1
console.log(recursivePower(2, 2)); // 4
console.log(recursivePower(3, 2)); // 9
console.log(recursivePower(4, 2)); // 16
console.log(recursivePower(16, 2)); // 256
console.log(recursivePower(32, 2)); // 1024
