// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.\

function productOfArray(array) {
    if (array.length === 1) {
        return array[0];
    } else {
       return array[0] + productOfArray(array.slice(1));
    }
};

console.log(productOfArray([1])); // 1
console.log(productOfArray([1, 2])); // 3
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 5, 7, 9])); // 27
console.log(productOfArray([2, 4,6, 8, 10])); // 30