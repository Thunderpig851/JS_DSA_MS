# Write a function called averagePair. Given a sorted array of integers and a target average, 
# determine if there is a pair of values in the array where the average of the pair equals the target average. 
# There may be more than one pair that matches the average target.

# O(n^2)
def averagePair(array, target):
    # loop over array once
    for num1 in array:
    #   loop over array twice
        for num2 in array:
    #     if position on array one /two averaged
    #     equals the target

            # Simulated edge case
            if type(num1) == str or type(num2) == str:
                return "Number encountered in array, Why?"

            if (num1 + num2) / 2 == target:
    #         return True
                return True
    # return false 
    return False

input1 = averagePair([1,2,3], 2.5)
print(input1)

# print(averagePair([1,2,3], 2.5)) # true
# print(averagePair([1,3,3,5,6,7,10,12,19],8)) # true
# print(averagePair([-1,0,3,4,5,6], 4.1)) # false
# print(averagePair([],4)) # false
# print(averagePair([1, '2', 3], 2.5)) # error?



