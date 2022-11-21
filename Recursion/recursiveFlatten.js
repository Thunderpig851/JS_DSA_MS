function recursiveFlatten(array) {
    // base case
    const flattened = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flattened.push(...recursiveFlatten(array[i]));
        } else {
            flattened.push(array[i]);

        }
    }
    return flattened;
}

console.log(recursiveFlatten([1, 2, 3, [4, 5] ]));// [1, 2, 3, 4, 5]
console.log(recursiveFlatten([1, [2, [3, 4], [[5]]]]));// [1, 2, 3, 4, 5]
console.log(recursiveFlatten([[1],[2],[3]])); // [1,2,3]
console.log(recursiveFlatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]