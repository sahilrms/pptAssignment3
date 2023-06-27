
// 💡 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// **Example 1:**
// Input: digits = [1,2,3]
// Output: [1,2,4]

// **Explanation:** The array represents the integer 123.

// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

let digits=[1,2,4];
(function adder(digits){
    let len=digits.length;
    let newNum=0;
    let revNum=[];
    for(let i=0;i<digits.length;i++){
        newNum=newNum*10+digits[i]
    }
    newNum+=1;
    for(let i=newNum;i!=0;i=Math.floor(i/10)){
        let rem=Math.floor(i%10);
        revNum.unshift(rem);
        }
    console.log(revNum)
})(digits);
