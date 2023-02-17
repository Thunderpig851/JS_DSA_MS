const LRUCache = function(capacity) {
    this.cache = {};
    this.currentSize = 0;
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
};

//Node for DLL
const Node = function(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

LRUCache.prototype.addNode = function(value) {
    // Add items to head of list
    let node = new Node(value);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        // save old head to a temp var
        let temp = this.head;
        // new node becomes the head (most recently used)
        this.head = node;
        // new heads next node is the old head (temp node)
        this.head.next = temp;
        temp.prev = this.head;
    }
    return node;
}

LRUCache.prototype.removeNode = function() {
    let temp;
    if (!this.head) {
        return null
    }
    if (this.length === 1) {
        temp = this.head;
        this.head = null;
        this.tail = null;
    } else {
        temp = this.tail
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
    }
    return temp;
}

LRUCache.prototype.get = function(key) {
    if (this.cache[key]) {
        this.addNode(key);
        this.removeNode();
        return this.cache[key].value;
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    let node = this.addNode(value);
    this.cache[key] = node;
    this.currentSize ++;
    if (this.currentSize > this.capacity) {
        let removal = this.removeNode();
        delete this.cache[removal.value];
        this.currentSize --;
    };
    return this;
};

let lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2);
// Issue with get not setting node to tail
console.log(lru.get(1)); // 1
// console.log(lru.cache);
// console.log(lru.tail)
lru.put(3, 3);
//console.log('Insert 3', lru.cache);
console.log(lru.get(2)); // -1 (Showing 2)
// console.log(lru.cache);
lru.put(4, 4);
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.get(4));


