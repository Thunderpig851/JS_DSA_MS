/*
Time Complexity: O(n^2)
*/

function bubbleSort(array) {
    for (let i = 0; i < array.length; i ++) {
        let noSwaps = true;
        for (let j = 0; j < array.length; j ++) {
            if (array[j] > array[j +1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                noSwaps = false;
            }
            if (!noSwaps) {
                break;
            }
            console.log(array);
        }
    }
    return array;
}

console.log(bubbleSort([2, 45, 8, 1, 100, 34])) // [1, 2, 8, 34, 45, 100]