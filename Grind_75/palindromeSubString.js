var longestPalindrome = function(string) {
    let maxLength = 0;
    let maxPal = '';

    for (let i = 0; i < string.length; i ++) {
        let substring = string.substring(i, string.length);
        
        for (let j = substring.length; j >= 0; j --) {
            let subSubString = substring.substring(0, j);

            if (isPal(subSubString)) {
                if (subSubString.length > maxLength) {
                    maxLength = subSubString.length;
                    maxPal = subSubString;
                }
            }
        }
    }
    
    return maxPal;
};

// Helper function to check
const isPal = (string) => {
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i --) {
        reverse += string[i];
    }
    return string === reverse;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));