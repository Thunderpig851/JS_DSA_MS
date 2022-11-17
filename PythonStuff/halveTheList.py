# 1. The halve_the_list function takes a list as an argument.
# 2. It then returns a tuple of two lists.
# 3. The first list is the first half of the input list.
# 4. The second list is the second half of the input list.
# 5. The first list has the first half of the input list’s elements.
# 6. The second list has the second half of the input list’s elements.
# 7. The first list has the first half + 1 element if the input list has an odd number of elements.
# 8. The second list has the second half + 1 element if the input list has an odd number of elements.


# Time Complexity: O(n)
def halve_the_list(input):                              
    return (                                            
        input[0:len(input) // 2 + (len(input) % 2)],    
        input[len(input) // 2 + (len(input) % 2):],     
    ) 

print(halve_the_list([1, 2, 3, 4])) 
print(halve_the_list([1, 2, 3, 4, 5]))  