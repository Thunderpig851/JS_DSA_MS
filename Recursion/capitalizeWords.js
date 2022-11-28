function capitalizedWords (array) {
    let capitalized = []
    
    function inner(arr) {
       if (arr.length === 1) {
         capitalized.push(arr[0].toUpperCase())
       } else {
         capitalized.push(arr[0].toUpperCase())
         inner(arr.slice(1));
       }
    }
    inner(array);
    return capitalized
}
  
let words = ['i', 'am', 're', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']