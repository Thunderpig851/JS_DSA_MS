var sortColors = function(numbers) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < numbers.length; i ++) {
        let current = numbers[i];
        if (current === 0) count0 ++;
        if (current === 1) count1 ++;
        if (current === 2) count2 ++;
    }

    let i = 0;
    while (count0 > 0) {
        numbers[i] = 0;
        count0 --
        i ++;
    }
    while (count1 > 0) {
        numbers[i] = 1;
        count1 --;
        i ++;
    }
    while (count2 > 0) {
        numbers[i] = 2;
        count2 --;
        i ++;
    }

    return numbers
};

console.log(sortColors([1])); // [0, 0, 1, 1, 2, 2]
//console.log(sortColors([2,0,1])) // [0, 1, 2]
//console.log(sortColors([1,2,0])) // [0, 1, 2]