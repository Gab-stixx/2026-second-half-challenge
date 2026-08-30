# Day 36/184 - August 5, 2026

## LeetCode 75: Problem 14 - Maximum Average Subarray I

### Problem
Find contiguous subarray of length k with maximum average.
- Input: nums = [1,12,-5,-6,50,3], k = 4
- Output: 12.75

### Solution (Sliding Window)

```typescript
function findMaxAverage(nums: number[], k: number): number {
    let sum = 0;
    let maxSum;

    // Calculate sum of first k elements
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    } 

    maxSum = sum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];  // Add new, remove old
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
}
```

### How It Works

nums = [1,12,-5,-6,50,3], k = 4

Step 1: Sum first k elements
sum = 1 + 12 + (-5) + (-6) = 2
maxSum = 2

Step 2: Slide window
i=4: sum = 2 + 50 - 1 = 51 → maxSum = 51
i=5: sum = 51 + 3 - 12 = 42 → maxSum = 51

Return: 51 / 4 = 12.75


### Key Insight
`sum += nums[i] - nums[i - k]`
- Add current element (right pointer moving)
- Remove element k positions back (left pointer moving)
- No recalculation needed

### Complexity
- **Time:** O(n) - two passes (first k + rest)
- **Space:** O(1) - constant space

### Sliding Window Pattern
1. Calculate initial window
2. Slide by: add new - remove old
3. Update state each slide
4. Track answer

### Key Learning
Sliding window removes redundancy.
O(n*k) → O(n) optimization.
Perfect for fixed-size windows.

---

**Streak: 36/184** 🔥