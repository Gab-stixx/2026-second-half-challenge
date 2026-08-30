# Day 54/184 - August 23, 2026

## LeetCode 75: Unique Number of Occurrences ✅

### Problem
Check if occurrence count of each value is unique.
- Input: [1,2,2,1,1,3] → true (1→3x, 2→2x, 3→1x)

### Solution

```typescript
function uniqueOccurrences(arr: number[]): boolean {
    const freqMap = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const values = Object.values(freqMap);
    const uniqueValues = new Set(values);
    return values.length === uniqueValues.size;
}
```

### How It Works

arr = [1,2,2,1,1,3]

freqMap = { 1:3, 2:2, 3:1 }
values = [3,2,1]
uniqueValues = {3,2,1} (size=3)
values.length(3) === uniqueValues.size(3) → true ✓


### Key Insight
If any two values share same frequency, Set removes the duplicate.
Size mismatch = not unique.

### Complexity
- Time: O(n) | Space: O(n)

---

**Streak: 54/184** 🔥