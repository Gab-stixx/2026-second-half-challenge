# Day 16/184 - July 16, 2026

## LeetCode 75: Problem 7 - Product of Array Except Self

### Problem
For each index i, calculate product of all elements EXCEPT nums[i].
- Constraint: NO division allowed
- Constraint: O(1) space (excluding output)
- Input: [1,2,3,4]
- Output: [24,12,8,6]

### Solution Approach

**Two-Pass Algorithm:**

```typescript
// Pass 1: Store left products
let leftProduct = 1;
for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
}

// Pass 2: Multiply by right products
let rightProduct = 1;
for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
}
```

### How It Works

**After Pass 1:** result[i] = product of all elements to LEFT