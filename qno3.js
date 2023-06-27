function possibleSeq(nums) {
    const numLen = nums.length;
    let i = numLen - 2;

    // Find the first pair of adjacent elements nums[i] and nums[i-1] such that nums[i] > nums[i-1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = numLen - 1;

        // Find the smallest element in the subarray nums[i:] that is greater than nums[i-1]
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }

        // Swap nums[i-1] and nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the subarray nums[i:]
    let begin = i + 1;
    let end = numLen - 1;
    while (begin < end) {
        [nums[begin], nums[end]] = [nums[end], nums[begin]];
        begin++;
        end--;
    }
}

const nums = [1, 2, 3];
possibleSeq(nums);
console.log(nums);
