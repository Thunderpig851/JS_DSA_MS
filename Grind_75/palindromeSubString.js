/*
Time Complexity: O(n^3)
*/
var longestPalindrome = function(string) {
    if (string.length < 1) return "";

    let maxSubStart = 0;
    let maxSubLength = 0;
    for (let i = 0; i < string.length; i ++) {
        
    }
};

// Helper function to check
const expandAroundCenter = (string, left, right) => {
   while (left >= 0 && right < string.length - 1 && string[left] === string[right]) {
    left --;
    right ++
   }
   return 
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));