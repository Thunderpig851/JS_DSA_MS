var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i ++) {
        console.log(stack)
        let token = tokens[i];
        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '-') {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(a - b)
        } else if (token === '/') {
            let b = stack.pop();
            let a = stack.pop();
            stack.push((Math.floor(a / b)));
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};

//console.log(evalRPN(["4","13","5","/","+"])) // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) // 22