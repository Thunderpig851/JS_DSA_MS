var longestPalindrome = function(string) {
  // convert to counter object
  let stringBreakdown = {}
  for (let i = 0; i < string.length; i ++) {
    let currentLetter = string[i];
    if (stringBreakdown[currentLetter]) {
        stringBreakdown[currentLetter] += 1;
    } else {
        stringBreakdown[currentLetter] = 1;
    }
  }
  let longestUneven = 0
  let length = 0;
  for (let key in stringBreakdown) {
    if (stringBreakdown[key] % 2 === 0) {
        length += stringBreakdown[key]
    } else if (stringBreakdown[key] % 2 === 1 && stringBreakdown[key] > longestUneven) {
        longestUneven = stringBreakdown[key]
    }
  }

  return length + longestUneven;
};

console.log(longestPalindrome('abbcccdd'));