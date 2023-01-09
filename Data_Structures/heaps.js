class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element < parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    insert(value) {
        this.values.push(value);
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
            if (leftValue > element) {
                swap = left;
            }
        }
        if (right < length) {
            rightValue = this.values[right];
            if (
                (swap === null && rightValue > element) || 
                (swap !== null && rightValue > leftValue)
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

    remove() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;

    }

    traverse() {
        console.log(this.values);
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.traverse();
console.log(heap.remove());
heap.traverse();
heap.insert(100);
heap.insert(1);
heap.traverse();
console.log(heap.remove());
heap.traverse();


