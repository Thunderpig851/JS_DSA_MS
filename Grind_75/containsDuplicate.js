var containsDuplicate = function(numbers) {
    let numberObj = {};
    for (let i = 0; i < numbers.length; i ++) {
        let current = numbers[i];
        numberObj[current] ? numberObj[current] += 1 : numberObj[current] = 1;
        if (numberObj[current] > 1) return true;
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true