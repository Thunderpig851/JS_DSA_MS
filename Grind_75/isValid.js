var isValid = function(string) {
    let stack = [];

    for (let i = 0; i < string.length; i ++) {
        let char = string[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); 
        } else if (char === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (char === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else if (char === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        }  else if ((char === ')' || char === '}' || char === ']') && (stack.length === 0)) {
            return false;
        } else if (stack[stack.length - 1] !== char) {
            return false
        }

    }
    return stack.length === 0
};
console.log(isValid('(])'))
console.log(isValid('()')) // true
console.log(isValid('([)]')) // false
console.log(isValid('((()()((')) // False
console.log(isValid('()())))')) // false