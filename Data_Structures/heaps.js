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

    traverse() {
        console.log(this.values);
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.traverse();

