Math.round = function(number) {
    let numArr= String(number).split('.');
    if (!numArr[1]) return Number(numArr[0])
    return Number(numArr[1].slice(0, 1)) >= 5 ? Number(numArr[0]) + 1 : Number(numArr[0]);
    
  };
  
  Math.ceil = function(number) {
    let numArr= String(number).split('.');
    if (!numArr[1]) return Number(numArr[0])
    return Number(numArr[1].slice(0, 1)) > 0 ? Number(numArr[0]) + 1 : Number(numArr[0] + 1);
  };
  
  Math.floor = function(number) {
    let numArr= String(number).split('.');
    return Number(numArr[0])
  };

console.log(Math.ceil(7.12)); // 
console.log(Math.ceil(0.5)); //
console.log(Math.ceil(7));