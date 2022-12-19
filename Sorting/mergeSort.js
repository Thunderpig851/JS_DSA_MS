/*
Time Complexity: O(n)
*/
function merge(arr1, arr2) {
   let merged = [];

   let i = 0;
   let j = 0;

   // Sort the two arrays
   // Using two pointer method. 
   while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i ++;
    } else if (arr1[i] > arr2[j]){
        merged.push(arr2[j]);
        j ++;
    } else if (arr1[i] === arr2[j]) {
        merged.push(...[arr1[i], arr2[j]]);
        i ++;
        j ++;
      }
    }
    // Get the remainder
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i ++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j ++;
    }
    //console.log(merged)
    return merged;
}

/*
Time Complexity: O(n log n)
*/
/*
1. If the array is empty or has one element, it’s already sorted.
2. Otherwise, we split the array into two halves.
3. We recursively call mergeSort on the left half.
4. We recursively call mergeSort on the right half.
5. Finally, we merge the two sorted halves.
*/
function mergeSort(array) {
    if (array.length <= 1 ) {
        return array;
    } else {
        let mid = Math.floor(array.length / 2);
        let left = mergeSort(array.slice(0, mid));
        let right = mergeSort(array.slice(mid));
        return merge(left, right);
    }

}

console.log(mergeSort([1, 5, 3, 9 ,3, 12]));