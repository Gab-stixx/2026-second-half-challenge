# Day 48/184 - August 17, 2026

## LeetCode: Pascal's Triangle II

### Problem
Return only the rowIndex row of Pascal's Triangle.
- Input: rowIndex = 3 → [1,3,3,1]

### Solution

```typescript
function getRow(rowIndex: number): number[] {
    const pascRow: number[] = Array(rowIndex + 1).fill(1);

    for (let currRow = 2; currRow <= rowIndex; currRow++) {
        for (let pos = currRow - 1; pos > 0; pos--) {
            pascRow[pos] += pascRow[pos - 1];
        }
    }

    return pascRow;
}
```

### Why Backwards?
Going forward uses already-updated values.
Going backwards preserves previous row's values.

### Trace

rowIndex=3, start: [1,1,1,1]
currRow=2: [1,2,1,1]
currRow=3: [1,3,3,1] ✓


### Complexity
- Time: O(n²) | Space: O(n) ← better than Part I

---

**Streak: 48/184** 🔥