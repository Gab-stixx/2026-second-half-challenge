# Day 45/184 - August 14, 2026

## LeetCode 75: Problem 19 - Find Pivot Index

### Problem
Find index where leftSum === rightSum.
- Input: [1,7,3,6,5,6] → 3

### Solution

```typescript
function pivotIndex(nums: number[]): number {
    let lSum = 0;
    let rSum = nums.reduce((acc, cur) => acc + cur, 0);

    for (let i = 0; i < nums.length; i++) {
        rSum -= nums[i];

        if (lSum === rSum) return i;

        lSum += nums[i];
    }

    return -1;
}
```

### How It Works

nums = [1,7,3,6,5,6], total = 28

i=0: rSum=27, lSum(0)===rSum(27)? No, lSum=1
i=1: rSum=20, lSum(1)===rSum(20)? No, lSum=8
i=2: rSum=17, lSum(8)===rSum(17)? No, lSum=11
i=3: rSum=11, lSum(11)===rSum(11)? YES → return 3 ✓


### Key Insight
Subtract current from rSum BEFORE comparing.
Add current to lSum AFTER comparing. Order matters!

### Complexity
- Time: O(n) | Space: O(1)

---

**Streak: 45/184** 🔥