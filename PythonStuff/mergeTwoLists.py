def mergeTwoLists(list1, list2):

    if (len(list1) == 0):
        return list2
    if (len(list2) == 0):
        return list1

    sorted = []
    i = 0
    j = 0

    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            sorted.append(list1[i])
            i += 1
        elif  list1[i] > list2[j]:
            sorted.append(list2[j])
            j += 1
        elif list1[i] == list2[j]:
            sorted + [list1[i], list2[i]]
            i += 1
            j += 1
    
    while i < len(list1):
        sorted.append(list1[i])
        i += 1

    while j < len(list2):
        sorted.append(list2[j])
        j +=1
    
    return sorted

print(mergeTwoLists([10, 20, 50, 100], [1, 22, 34, 49, 75]))
