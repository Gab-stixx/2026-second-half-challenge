# Day 72/184 - September 10, 2026 🎂

## LeetCode 66: Plus One

### Problem

Given an array of digits representing a non-negative integer, increment the integer by one.

Examples:

* `[1,2,3]` → `[1,2,4]`
* `[1,2,9]` → `[1,3,0]`
* `[9,9,9]` → `[1,0,0,0]`

### Solution

```typescript
function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    return [1, ...digits];
};
```

### Why Right to Left?

Adding one starts from the last digit.

If the digit is `9`, it becomes `0` and the carry moves to the next digit.

### Key Insight

Handle the carry directly instead of converting the entire array into a number.

### Complexity

* Time: O(n)
* Space: O(1) extra space

---

**Streak: 72/184** 🔥
