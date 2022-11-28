// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (array) {

    const uppercase = [];

    function interior(arr) {
        if (arr.length === 1) {
            uppercase.push(arr[0][0].toUpperCase() + arr[0].slice(1));
        } else {
            uppercase.push(arr[0][0].toUpperCase() + arr[0].slice(1));
            interior(arr.slice(1))
        }
    }
    interior(array);
    return uppercase;
};

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
// capitalizeFirst(['this','that','other']); // ['This','That','Other']
// capitalizeFirst(['ollie','bruce','ashe']); // ['Ollie','Bruce','Ashe']