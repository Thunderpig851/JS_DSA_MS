const cakes = (recipe, available) => {
    let obj = {};
    for (let key in recipe) {
        if (key in available) {
            obj[key] =  Math.floor(available[key] / recipe[key]);
        } else {
            return 0
        }
    }
    let lowest = Infinity;
    for (let key in obj) {
        if (obj[key] < lowest) {
            lowest = obj[key];
        }
    }
    return lowest;
}

// Must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 