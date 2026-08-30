# Day 40/184 - August 9, 2026

## LeetCode 75: Problem 16 - Max Consecutive Ones III

### Problem
Find longest subarray of 1s after flipping at most k zeros.
- Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
- Output: 6

### Solution

```typescript
function longestOnes(nums: number[], k: number): number {
  let move = 0;
  let zeroCounter = 0;

  for (const num of nums) {
    zeroCounter += num ^ 1;  // XOR trick: counts zeros

    if (zeroCounter > k) {
      zeroCounter -= nums[move] ^ 1;  // Remove leftmost
      move++;
    }
  }

  return nums.length - move;
}
```

### The XOR Trick
`num ^ 1` flips the bit:
- 1 ^ 1 = 0 (not a zero, add nothing)
- 0 ^ 1 = 1 (found a zero, add 1)

Replaces if-statement with bitwise operation.
Works because array is binary (only 0s and 1s).

### How It Works
- Expand window by iterating right
- Count zeros using XOR
- When zeros > k: shrink from left
- Window size never shrinks (move only goes forward)
- Final answer: nums.length - move

### Complexity
- **Time:** O(n) single pass
- **Space:** O(1)

### Key Learning
XOR on binary arrays is powerful.
2 days understanding = permanent knowledge.
Bit manipulation isn't scary, it's elegant.

---

**Streak: 40/184** 🔥