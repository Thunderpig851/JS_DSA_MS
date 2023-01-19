var isPalindrome = function(string) {
    let reverse = string.split('').reverse().join();
    reverse = reverse.replace(/[^0-9a-z]/gi, '');
    string = string.replace(/[^0-9a-z]/gi, '');
    console.log(string, reverse)
    if (string.length === 2 && string[0].toLowerCase() !== string[1].toLowerCase()) return false;
    return string.toLowerCase() === reverse.toLowerCase();
}

console.log(isPalindrome("ab_a"))