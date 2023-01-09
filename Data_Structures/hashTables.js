function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen
    }
    return total;
}

console.log(hash('pink', 8))
console.log(hash('maroon', 8))
console.log(hash('green', 8))
console.log(hash('red', 8))
console.log(hash('white', 8))
console.log(hash('black', 8))
console.log(hash('blue', 8))
console.log(hash('gray', 8))