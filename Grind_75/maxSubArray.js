var maxSubArray = function(numbers) {
    
    let maxSub = numbers[0];
    currentSum = 0;

    for (let i = 0; i < numbers.length; i ++) {
        let number = numbers[i];
        if (currentSum < 0){
            currentSum = 0;
        }
        currentSum += number;
        maxSub = Math.max(maxSub, currentSum)
    } 
    return maxSub;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
// console.log(maxSubArray([1])); // 1 
// console.log(maxSubArray([5,4,-1,7,8])); // 23