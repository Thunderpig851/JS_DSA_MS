def twoSum(numbers, target):
    storage = {}

    for index, number in enumerate(numbers):
        difference = target - number
        if difference in storage:
            return [storage[difference], index]
        else:
            storage[number] = index;
    return [];

print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3, 2, 4], 6))
print(twoSum([3, 3], 6))