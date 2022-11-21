function recursivePalindrome(string) {
    if (string.length <= 1) {
        return true;
    } else if (string[0] !== string[string.length - 1]) {
        return false;
    } else if (string[0] === string[string.length - 1]) {
        return recursivePalindrome(string.substring(1, string.length- 1));
    }
};

console.log(recursivePalindrome('racecar')); // true
console.log(recursivePalindrome('tacocat')); // true 
console.log(recursivePalindrome('titular')); // false
console.log(recursivePalindrome('singularity')); // false