var productExceptSelf = function(numbers) {
    const length = numbers.length;
    let prefix = [];
    let suffix = [];

    prefix[0] = 1
    suffix [length - 1] = 1

    let result = []

    for (let i = 1; i < length; i ++) {
        prefix[i] = prefix[i - 1] * numbers[i - 1];
    };
    for (let i = length - 2; i >= 0; i --) {
        suffix[i] = suffix[i + 1] * numbers[i + 1];
    };
    for (let i = 0; i < length; i ++) {
        result[i] = prefix[i] * suffix[i];
    };

    return result;
};

console.log(productExceptSelf([-1,1,0,-3, 3])) // [24, 12, 8, 6]