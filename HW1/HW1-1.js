
const nums = [4,9,5,3,8]

function transform(nums) {

  const map = nums.map(nums => nums * nums);

  return map.sort(function(a, b){return a - b})

}

 const sortedSquaredNums = transform(nums)
 console.log(sortedSquaredNums) 