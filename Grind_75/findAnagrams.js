/*
Time Complexity: O(n)
*/
var findAnagrams = function(string, possible) {
    //Sliding window
    let indexes = [];
    let obj = {};
    for (let i = 0; i < possible.length; i ++) {
        let key = possible[i];
        if (obj[key]) {
            obj[key] ++;
        } else {
            obj[key] = 1;
        }
    }

    let start = 0;
    let end =  0;
    while (end < string.length) {
        // If current start of string is in object
        if (obj[string[end]] > 0) {
            // remove it
            obj[string[end]] --;
            // increment end
            end ++
            // Match is found
            if (end - start === possible.length) {
                indexes.push(start);
            }
        } else if (start === end) {
            start ++;
            end ++;
        } else {
            obj[string[start]] ++;
            start ++;
        }
    }
    return indexes;
};

console.log(findAnagrams("cbaebabacd", 'abc')); // [0,6]
console.log(findAnagrams("abab", 'ab')) // [0, 1, 2]
