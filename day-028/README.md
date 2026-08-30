# Day 28/184 - July 28, 2026

## Practice: Square Root Without Builtin

### Problem
Compute integer square root WITHOUT Math.sqrt().
- Input: x = 8
- Output: 2

### Solution: Binary Search

```typescript
function mySqrt(x: number): number {
    if (x === 0) return 0;

    let left = 1;
    let right = x;
    let firstTrueIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid > Math.floor(x / mid)) {
            firstTrueIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (firstTrueIndex === -1) return x;
    return firstTrueIndex - 1;
}
```

### How It Works
Find first point where mid² > x.
Return value just before.

### Condition Explanation
`mid > x/mid` equivalent to `mid² > x`
- Avoids overflow on large numbers
- Division safer than multiplication

### Complexity
- **Time:** O(log x) binary search
- **Space:** O(1)

### Other Methods Possible
- Iteration (O(√x))
- Newton's method
- Bit manipulation

### Key Learning
Same problem, multiple methods.
Binary search = elegant + efficient.
Understanding trade-offs matters.

---

**Streak: 28/184** 🔥