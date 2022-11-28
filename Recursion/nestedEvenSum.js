function nestedEvenSum (obj) {
    let total = 0

    function inner(recursiveObj) {
        if (typeof recursiveObj === 'number' && recursiveObj % 2 === 0) {
            total += recursiveObj
        }
        if (typeof recursiveObj === 'object') {

            let keys = Object.keys(recursiveObj);
            let i = 0;

            while (i < keys.length) {
                let key = keys[i];
                inner(recursiveObj[key]);
                i ++;
            }
        }
    }

    inner(obj);
    return total;
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10