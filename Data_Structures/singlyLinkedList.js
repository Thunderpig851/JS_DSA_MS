class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // Push adds a value only to the end of the linked list.
    push(value){
        let node = new Node(value);

        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length ++;
        return this;
    }

    // Pop removes the last node from the the list.
    pop() {
        // If no head then there are no nodes.
        if (!this.head) {
            return undefined;
        } else {
            // Base for while loop
            let current = this.head;
            while (current.next) {
                if (current.next.next === null) {
                    this.tail = current;
                    this.tail.next = null

                    let popped = current.next;
                    this.length --;
                    return popped;
                }
                // Increment while loop
                current = current.next;
            } 
        }
    }
    // Shift removes the head of a linked list 
    // and shifts the remaining nodes.
    shift () {
        if (!this.head) {
            return undefined;
        } else {
            let head = this.head;
            this.head = head.next;
            this.length --;
            if (this.length === 0) {
                this.tail = null;
            }
            return head;
        }
    }

    insert(value, index) {
        // Edge Cases

        
        if (index < 0) return false;

        if (this.length === 0) {
            this.push(value)
        }

        // Insert Logic
        let current = this.head;
        let i = 0;

        while (current) {

            if(i === index - 1) {
                let node = new Node(value);
                let temp = current.next;
                current.next = node;
                node.next = temp;
                return current;
            }

            current = current.next;
            i ++
        }
    }

    get(index) {
        // Edge Case
        if (index < 0 || index > this.length) return null; 

        let current = this.head;
        let i = 0;

        while (current) {
            if (i === index) {
                return current;
            }
            current = current.next
            i ++;
        }

        return null;
    }
    // Removes a specific node at the index
    remove(index) {

        if (index < 0 || index > this.length) return null;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

  
        let prev = this.get(index - 1);
        let removed = this.get(index);
        let next = 

        prev.next = next.next;

        return removed;

    }
    reverse() {
        let node = this.head
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i ++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this;
    }
    // Traverse returns the nodes of the list in an array
    traverse() {
        let node = this.head;
        for (let i = 0; i < this.length; i ++) {
            console.log(this.get(i))
        }
    }
}

let list =  new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.traverse();
list.reverse();
list.traverse();
