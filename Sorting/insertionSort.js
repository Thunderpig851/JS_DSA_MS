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
        console.log(array);
    }
    return array;
};


console.log(insertionSort([34, 22, 10, 19, 17]));