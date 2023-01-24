var majorityElement = function(numbers) {
    let obj = {};
    let result = 0;
    let majority = 0;
    for (let i = 0; i < numbers.length; i ++) {
        let key = numbers[i];
        obj[key] ? obj[key] +=1 : obj[key] = 1;
       if ( obj[key] > majority ) {
            majority = obj[key];
            result = key;
        }
    }
    return result;
};

console.log(majorityElement([2,2,1,1,1,2,2])); // 2
console.log(majorityElement([3,2,3])); // 3