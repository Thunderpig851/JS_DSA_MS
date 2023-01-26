
var threeSum = function(nums) {
    nums.sort();
    let obj = {};
    let result = [];
    for(var i = 0; i < nums.length-2; i++){
            // do two sum here
            var target = -nums[i];
            var left = i+1;
            var right = nums.length - 1;
        
        while(left < right){
            let curr = nums[left] + nums[right];
            if(curr > target)
            {
                right--;        
            }
            else if(curr < target){
                left++;
            }
            else{
                let arr = [-target, nums[left], nums[right]];
                if (obj[arr] = 1){
                    obj[arr]= 1;
                    result.push(arr);
                }
                left++;
                right--;
            }   
        }  
    }
    return result;
};

// let result = threeSum([-1,0,1,2,-1,-4]) // [[-1, 0, 1], [-1, -1, 2]]
// result.forEach(thing => {
//     console.log(thing)
// })
// let newResult = threeSum([1, 2, -2, -1]) // []
// console.log(newResult)

let newestResult = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]) // [[-4,0,4],[-4,1,3], Not showing up -> [-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]] // 9
newestResult.forEach(thing => {
    console.log(thing)
})
console.log(newestResult.length)