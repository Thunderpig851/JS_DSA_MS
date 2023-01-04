class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
      this.root = null;    
    }

    insert(value) {
        let node = new Node(value)
        
        // No Root Node
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;

                if (value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left
                    }
                }
                if (value > current.value) {
                    if (!current.right) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === value) return true;

        let current = this.root;
        let found = false
        while(current && !found) {
            if (current.value === value) return current;
            else if (value > current.value) {
                current = current.right
            } else {
                current = current.left;
            }
        } 
        return false;

    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(25);
console.log(tree.find(20));