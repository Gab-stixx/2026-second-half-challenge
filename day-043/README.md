# Day 43/184 - August 12, 2026

## LeetCode 75: Problem 17 - Longest Subarray of 1s (Both Approaches)

### Problem
Delete exactly one element from binary array. Find longest subarray of 1s remaining.
- Input: [1,1,0,1,1] → 4

### Approach 1: Two Arrays

```typescript
function longestSubarray(nums: number[]): number {
    const arrayLength = nums.length;
    const consecutiveOnesFromLeft = Array(arrayLength + 1).fill(0);
    const consecutiveOnesFromRight = Array(arrayLength + 1).fill(0);

    for (let i = 1; i <= arrayLength; ++i) {
        if (nums[i - 1] === 1) {
            consecutiveOnesFromLeft[i] = consecutiveOnesFromLeft[i - 1] + 1;
        }
    }

    for (let i = arrayLength - 1; i >= 0; --i) {
        if (nums[i] === 1) {
            consecutiveOnesFromRight[i] = consecutiveOnesFromRight[i + 1] + 1;
        }
    }

    let maxLength = 0;
    for (let i = 0; i < arrayLength; ++i) {
        const currentLength = consecutiveOnesFromLeft[i] + consecutiveOnesFromRight[i + 1];
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}
```

- Time: O(n) | Space: O(n)

### Approach 2: Sliding Window (Optimal)

```typescript
function longestSubarray(nums: number[]): number {
    let left = 0;
    let zeros = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;

        while (zeros > 1) {
            if (nums[left] === 0) zeros--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
}
```

- Time: O(n) | Space: O(1)

### Key Learning
Same time complexity. Sliding window wins on space.

---

**Streak: 43/184** 🔥