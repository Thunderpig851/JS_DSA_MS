// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(string){
    let longestSubString = 0;
    let startOfWindow = 0;
    let currentPosition = 0;
    // Set has constant time size
    let letterSet = new Set();

    while (currentPosition < string.length) {
        if (letterSet.has(string[currentPosition])) {
            letterSet.delete(string[startOfWindow]);
            startOfWindow++;
        } else {
            letterSet.add(string[currentPosition]);
            longestSubString = Math.max(longestSubString, letterSet.size);
            currentPosition++;
        }
    }
    return longestSubString;
};

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
console.log(findLongestSubstring('cameron')) //7