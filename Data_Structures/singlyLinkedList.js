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
                    let popped = current.next;
                    this.length --;
                    return popped;
                }
                // Increment while loop
                current = current.next;
            } 
        }
    }

    // Traverse returns the nodes of the list in an array
    traverse() {
        let current = this.head

        while (current.next) {
            console.log()
            current = current.next;
        } 
    }
}

let list =  new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.length);
console.log(list.pop());
console.log(list.length);


