class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority > parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    enqueue(value, priority) {
        let node = new Node(value, priority)
        this.values.push(node);
        this.bubbleUp()
        return this;
    }

    sinkDown() {
      let index = 0;
      const length = this.values.length;
      const element =  this.values[0];

      while(true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let rightValue, leftValue;
        let swap = null;

        if (left < length) {
            leftValue = this.values[left];
            if (leftValue.priority < element.priority) {
                swap = left;
            }
        }
        if (right < length) {
            rightValue = this.values[right];
            if (
                (swap === null && rightValue.priority < element.priority) || 
                (swap !== null && rightValue.priority < leftValue.priority)
                ) {
                swap = right;
            }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return max;

    }

    traverse() {
        console.log(this.values);
    }
}

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}


const queue = new PriorityQueue();
queue.enqueue("sprained ankle", 3)
queue.enqueue("back pain", 5)
queue.enqueue("exploded knee", 2)
queue.enqueue("broken wrist", 3)
queue.enqueue("tooth ache", 5)
queue.enqueue("internal bleeding", 1)
queue.enqueue("migraine", 4)
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
