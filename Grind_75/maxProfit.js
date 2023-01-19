var maxProfit = function(prices) {
    // Edge Case
    let maxProfit = 0;
    let currentProfit = 0;
    let i = 0;
    let j = i + 1;

    while (j < prices.length) {
        currentProfit = prices[j] - prices[i];

        if (currentProfit < 0) {
            i = j;
        } else {
            maxProfit = Math.max(currentProfit, maxProfit)
        }
        j ++;
    }
    return maxProfit;
};

// console.log(maxProfit([7,1,5,3,6,4])) // 5
// console.log(maxProfit([7,6,4,3,1])) // 0
// console.log(maxProfit([1, 4, 2])) // 3
console.log(maxProfit([3,2,6,5,0,3])) // 4