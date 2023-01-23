/*
Time Complexity: O(n)
*/
var canConstruct = function(ransomNote, magazine) {
    // pass over the magazine and built an object of its contents
    let possibleLetters = {};
    for (let i = 0; i < magazine.length; i ++) {
        let currentLetter = magazine[i];
        if (possibleLetters[currentLetter]) {
            possibleLetters[currentLetter] += 1;
        } else {
            possibleLetters[currentLetter] = 1;
        }
    }
    console.log(possibleLetters)
    // same as the bottom but use the created object
    for (let i = 0; i < ransomNote.length; i ++) {
        let currentLetter = ransomNote[i];
        if (possibleLetters[currentLetter] > 0) {
            possibleLetters[currentLetter] -= 1;
        } else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct('aa', 'aab')) // true
console.log(canConstruct('aA', 'aab')) // false
console.log(canConstruct('ab', 'aaB')) // false

// let possibleLetters = magazine.split('');
//     // loop over the ransom note
//     for (let i = 0; i < ransomNote.length; i ++) {
//         let currentLetter = ransomNote[i];
//         // if magazine contains current letter
//         if (possibleLetters.includes(currentLetter)) {
//             // remove it from the magazine
//             let removalIndex = possibleLetters.indexOf(currentLetter);
//             possibleLetters.splice(removalIndex, 1);
//             // if not
//         } else {
//             // return false
//             return false;
//         }
//     }
//     // return true 
//     return true;