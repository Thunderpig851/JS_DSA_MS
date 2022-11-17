function recursiveRange(num) {
    //base case
    if (num === 1) {
        return 1;
    } else {
        return num + recursiveRange(num - 1);
    }
}

console.log(recursiveRange(1)) // 1
console.log(recursiveRange(2)) // 3
console.log(recursiveRange(3)) // 6
console.log(recursiveRange(4)) // 10
console.log(recursiveRange(5)) // 15
console.log(recursiveRange(6)) // 21
