function score( dice ) {
    // set total
    let total = 0;
    // set holder obj
    let obj = {};
    //iterate over dice array
    for (let i = 0; i < dice.length; i ++) {
        let current = dice[i];
        //build out object of collected values
        if (obj[current]) {
            obj[current] ++;
        } else {
            obj[current] = 1;
        }
    }

    //iterate over holder obj
    for (let key in obj) {
        // Handle 1s
        if (Number(key)=== 1) {
            while (obj[key] > 0) {
                if (obj[key] >= 3) {
                    total += 1000;
                    obj[key] -= 3;
                } else {
                    total += 100;
                    obj[key] --;
                }
            }
        }
        // Handle 5s
        if (Number(key) === 5) {
            while (obj[key] > 0) {
                if (obj[key] >= 3) {
                    total += 500;
                    obj[key] -= 3;
                } else {
                    total += 50;
                    obj[key] --;
                }
            }
        }
        // Everything else
        if (Number(key) && obj[key] === 3) {
            total += key * 100
        }
    }
    // return total
    return total
}

console.log(score([3, 3, 3, 4, 6])) // 300