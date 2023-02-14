var subsets = function(numbers) {
    let subSets = [];
    let combinations = 2 ** numbers.length;

    for (let i = 0; i < combinations; i ++) {
        let subSet = [];

        for (let j = 0; j < numbers.length; j ++) {
            if (i & (1 << j)) {
                subSet.push(numbers[j]);
            }
        }
        subSets.push(subSet);
    }
    return subSets;
};

const result = subsets([1,2,3]) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
result.forEach(item => {
    console.log(item);
})