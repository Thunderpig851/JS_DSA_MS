function generateHashtag (string) {
    if (string.length === 0) return false;
    
    let result = '#'
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i ++) {
        let current = arr[i];
        current = current[0].toUpperCase() + current.slice(1);
        result += current;
    }
    return result.length > 140 ? false : result;
  }

  console.log(generateHashtag('hello world'))