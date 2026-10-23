# Day 111/184

## LeetCode: Valid Triangle Number

### Why this problem today?

Day 111 → three 1s → triangle has three sides. Logic checks out 😄

### Problem

Count triplets that form valid triangle sides.

- Input: [2,2,3,4]
- Output: 3

### Solution

```typescript
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let k = nums.length - 1; k >= 2; k--) {
    let left = 0;
    let right = k - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[k]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return count;
}
```

### Key Insight

If nums[left] + nums[right] > nums[k]:
All pairs from left to right-1 are valid at once.
count += right - left skips redundant checks.

### Complexity

- Time: O(n²) | Space: O(1)

---

**Streak: 111/184** 🔥
