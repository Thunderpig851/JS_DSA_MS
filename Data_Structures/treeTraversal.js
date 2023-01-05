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

    // Searches row by row
    // Going the entire breadth of the tree
    // In order of rows, starting at the root
    BFS(){
        let data = [];
        let queue = [];
        let node = this.root

        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return data;
    }

    DFS_PreOrder(){
        const data = [];

        function helper(node) {

            data.push(node.value);

            if (node.left) {
                helper(node.left);
            }
            if (node.right) {
                helper(node.right)
            }
        }
        helper(this.root);
        return data;
    }

    DFS_PostOrder(){
        const data = []

        function helper(node) {
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            data.push(node.value);
        }

        helper(this.root);
        return data;
    }

    DFS_InOrder(){
        const data = [];

        function helper(node) {
            if (node.left) helper(node.left);
            data.push(node.value);
            if (node.right) helper(node.right);
        }
        helper(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(12);
tree.insert(20);
let nodes = tree.DFS_InOrder();
for (let i = 0; i < nodes.length; i ++) {
    console.log(nodes[i]);
}