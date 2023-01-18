function mergeTwoLists(list1, list2) {

    //Edge Case
    if (!list1.length) {
        return list2;
    }
    if (!list2.length) {
        return list1;
    }

    let i = 0;
    let j = 0;
    let sorted = [];

    while (i < list1.length && j < list2.length) {
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
        sorted.push(list1[i]);
        i ++;
    }

    while (j < list2.length) {
        sorted.push(list2[j]);
        j ++;
    }

    return sorted;
}

console.log(mergeTwoLists([10, 20, 50, 100], [1, 22, 34, 49, 75]));