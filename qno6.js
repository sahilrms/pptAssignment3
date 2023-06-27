function findSingleNumber(nums) {
    return nums.reduce((result, num) => result ^ num, 0); //xor of nums
}

const nums = [2, 2, 1,1,4];
const singleNumber = findSingleNumber(nums);
console.log(singleNumber);