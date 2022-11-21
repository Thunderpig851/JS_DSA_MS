// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


function reverseString(string){
    // base case
    if (string.length === 1) {
        return string;
    }
    // recursive case
   return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
};

console.log(reverseString('apples'));
console.log(reverseString('effectively'));
console.log(reverseString('perfected'));
