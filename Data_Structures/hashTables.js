class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i ++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
            this.keyMap[index].push([key, value]);
        } 
        this.keyMap[index].push([key, value]);
        
        return index;
    }

    get(key){
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i ++) {
                let node = this.keyMap[i];
                if (node[i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
    }
}

let hashTable = new HashTable();
console.log(hashTable.set("maroon", 1))
hashTable.set("yellow", 2)
hashTable.set("olive", 3)
hashTable.set("salmon", 5)
hashTable.set("coral", 5)
hashTable.set("red", 6)
hashTable.set("green", 7)
hashTable.set("blue", 8)
console.log(hashTable.get('maroon'));
