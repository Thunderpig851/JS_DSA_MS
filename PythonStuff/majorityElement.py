def majorityElement(numbers):
    result = 0
    majority = 0
    obj = {}

    for index, element in enumerate(numbers):
        try:
            obj[element] += 1
        except:
            obj[element] = 1
        
        if obj[element] > majority:
            majority = obj[element]
            result = element
    
    return result
    
print(majorityElement([1, 1, 1, 1, 2, 2]))
