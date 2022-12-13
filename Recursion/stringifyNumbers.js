function stringifyNumbers(obj) {

    function inner(arr) {
        // base case find a number
        if (typeof obj === 'number') {
            //convert to string
        }
        if (typeof obj === 'object') {
            for (let key in obj) {
                inner(obj[key])
            }
        }
    }

    inner(array)
    return obj;
}




let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));
/*
stringifyNumbers(obj)

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/