# Day 29/184 - July 29, 2026

LeetCode 75: Problem 9 Move Zeroes

Example: [0,1,0,3,12] → [1,3,12,0,0]Approach: Two-pointer — track write position, copy non-zeros forward, fill rest with zeros.Code:
```typescript
function moveZeroes(nums: number[]): void {    const len = nums.length;    let iterPtr = 0;    for (let nonZeroPtr = 0; nonZeroPtr < len; nonZeroPtr++) {        if (nums[iterPtr] !== 0) {            [nums[iterPtr], nums[nonZeroPtr]] = [nums[nonZeroPtr], nums[iterPtr]];            iterPtr++;        }    }}