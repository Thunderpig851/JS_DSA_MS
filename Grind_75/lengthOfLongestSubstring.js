var lengthOfLongestSubstring = function(string) {

    const set = new Set();
    let startOfWindow = 0;
    let currentPosition = 0;
    let longestSubstring = 0;

    while (currentPosition < string.length) {
        if (set.has(string[currentPosition])) {
            set.delete(string[startOfWindow]);
            startOfWindow ++;
        } else {
            set.add(string[currentPosition]);
            longestSubstring = Math.max(set.size, longestSubstring);
            currentPosition ++;
        }
    }
    return longestSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3