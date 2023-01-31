var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.min.length || val <= this.min[this.min.length - 1]) {
        this.min.push(val)
    }
    this.stack.push(val)

   return this.stack;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped =  this.stack.pop();
    if (popped === this.min[this.min.length - 1]) this.min.pop()
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

const minStack = new MinStack();
minStack.push(20);
minStack.push(15);
minStack.push(12);
minStack.pop();
minStack.pop();
console.log(minStack.getMin());

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */