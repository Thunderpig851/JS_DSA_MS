function collectStrings(obj) {
    let strings = [];

    function inner(recursiveObj){
        if (typeof recursiveObj === 'string') {
            strings.push(recursiveObj)
        }
        if (typeof recursiveObj === 'object') {
            for (let key in recursiveObj) {
                inner(recursiveObj[key])
            }
        }
    }
    inner(obj);
    return strings;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))// ["foo", "bar", "baz"])