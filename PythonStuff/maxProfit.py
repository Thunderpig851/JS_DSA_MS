def maxProfit(prices):
    maxProfit = 0
    currentProfit = 0
    i = 0
    j = i + 1

    while (j < len(prices)):
        currentProfit = prices[j] - prices[i]

        if currentProfit < 0:
            i = j
        else:
            maxProfit = max(currentProfit, maxProfit)

        j += 1

    return maxProfit

print(maxProfit([3,2,6,5,0,3]))