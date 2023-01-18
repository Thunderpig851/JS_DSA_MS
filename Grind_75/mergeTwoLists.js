function mergeTwoLists(list1, list2) {

    //Edge Case
    if (!list1.length) {
        return list2;
    }
    if (!list2.length) {
        return list1;
    }

    let longest = list1.length >= list2.length ? list1 : list2;
    let i = 0;
    let j = 0;
    let sorted = [];

    while (i <= longest && j <= longest) {
        if (list1[i] < list2[j]) {
            sorted.push(list1[i]);
            i ++;
        } else if (list1[i] > list2[j]) {
            sorted.push(list2[j]);
            j ++;
        } else if (list1[i] === list2[j]) {
            sorted.push(...[list1, list2])
        }
    }

    while (i < list1.length) {
        sorted.push(list[i]);
        i ++;
    }

    while (j < list2.length) {
        sorted.push(list2[j]);
        j ++;
    }

    return sorted
}

console.log(mergeTwoLists([], []));