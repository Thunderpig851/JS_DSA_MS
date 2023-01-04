class Node  {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        // Edge Case: First Node
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.prev = temp;
        }
        this.length ++;
        return this;
    }

    pop() {
        // Edge Case: No Nodes
        if (!this.head) {
            return null
        }
        //Edge Case: One Node
        if (this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;

            this.length --;
            return temp;
        } else {
            let temp = this.tail
            this.tail = this.tail.prev;
            this.tail.next = null;
            
            this.length --;
            temp.prev = null;
            return temp
        }
    }

    shift() {
        // Edge Case: No Nodes
        if (!this.head) {
            return null;
        }
        // Edge Case: One Node
        let temp = this.head
        if (this.length === 1) {

            this.head = null;
            this.tail = null;

        } else {

            this.head = this.head.next;
            this.head.prev = null

        }

        temp.prev = null;
        this.length --;
        return temp;
    }

    unshift(value) {
        let node = new Node(value);

       if (!this.head) {
        this.head = node;
        this.tail = node;
       } else {
        let temp = this.head;
        this.head = node;
        this.head.next = temp;
        temp.prev = this.head;
       }
       this.length ++;
       return this;
    }

    search(index) {
        let start = this.head;
        let end = this.tail;

        while (start.next && end.prev) {
            if (start.value === index - 1) {
                return start;
            }
            if (end.value === index -1) {
                return end;
            }
            start = start.next;
            end = end.prev;
        }
        return null;
    }
 
    get(index) {
        if (index < 0 || index > this.length) return null

        if (index > (Math.floor(this.length / 2))) {
            let counter = this.length - 1;
            let end = this.tail;
            while (end.prev) {
                if (index  === counter) {
                    return end;
                }
                counter --;
                end = end.prev;
            }
        } else {
            let counter = 0;
            let start = this.head;
            while (start.next) {
                if (index === counter) {
                    return start;
                }
                counter ++;
                start = start.next;
            }
        }
    }

    set(value, index) {
        let node = this.get(index);
        if (node) {
            node.value = value
            return true
        };
        return false;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return null
        if (index === 0) {
            return this.unshift(value);
        }
        if (index = this.length) {
            return this.push(value);
        }
        // Use get to retrieve nodes around insertion point
        let previousNode = this.get(index - 1);
        let nextNode = this.get(index);
        
        let newNode = new Node(value);
        //Connect new node to previous position
        previousNode.next = newNode;
        newNode.prev = previousNode;
        // Connect new node to next node
        newNode.next = nextNode;
        nextNode.prev = newNode;

        return this;
    }

    remove(index) {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length -1 ) return this.pop();
        
        // Get removed and remove its connections before returning
        let removed = this.get(index)
        removed.next = null;
        removed.prev = null;

        // Get nodes around removed
        let previous = this.get(index - 1);
        let next = this.get(index + 1)

        // Link previous and next
        previous.next = next;
        next.prev = previous;

        return removed;
    }

    traverse() {
        let nodes = []
        let current = this.head;

        while (current) {
            nodes.push(current);
            console.log(current.prev, current, current.next);
            current = current.next;
        }
        return nodes;
    }
}

const list = new DoublyLinkedList();
list.push(0).push(1).push(2).push(3);
list.traverse();