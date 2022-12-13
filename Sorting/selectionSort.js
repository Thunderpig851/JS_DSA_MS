/*
Time Complexity: O(n^2)
*/
function selectionSort(array) {
    for (let i = 0; i < array.length; i ++) {
        var lowest = i;
        for (let j = i + 1 ; j < array.length; j ++) {
            if (array[j] < array[lowest]) {
                lowest = j;
            }
        }
        console.log(array);
        let temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
    }
    return array;
}

console.log(selectionSort([34, 22, 10, 19, 17])) 