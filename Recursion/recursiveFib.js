/*
Time Complexity: O(2^n)
*/
function fib(number) {
    if (number < 2) {
        return number;
    } else {
        return fib(number - 1) + fib(number - 2);
    }
};


console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2));
console.log(fib(3));
console.log(fib(20));