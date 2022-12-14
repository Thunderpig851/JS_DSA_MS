/*
1. We start at the beginning of the array and iterate through it.
2. We set the holePosition to the current index we’re looking at.
3. We set the valueToInsert to the value at the current holePosition.
4. We then check to see if the holePosition is greater than 0 and if the value at holePosition – 1 is greater than valueToInsert.
5. If it is, we set the value at holePosition to the value at holePosition – 1.
6. We then decrement holePosition by 1.
7. We then set the value at holePosition to valueToInsert.
8. We then log the array to the console.
9. We then return the array.
*/

/*
Time Complexity: O(n^2)
*/
function insertionSort(array) {
    let holePosition;
    let valueToInsert;

    for (let i = 0; i < array.length; i ++) {
        holePosition = i;
        valueToInsert = array[i];

        while (holePosition > 0 && array[holePosition - 1] > valueToInsert) {
            array[holePosition] = array[holePosition - 1];
            holePosition --;
        }
        array[holePosition] = valueToInsert;
    }
    return array;
};


console.log(insertionSort([34, 22, 10, 19, 17]));