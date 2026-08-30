# Day 47/184 - August 16, 2026

## LeetCode: Pascal's Triangle

### Problem
Generate first numRows of Pascal's Triangle.
- Input: numRows = 4
- Output: [[1],[1,1],[1,2,1],[1,3,3,1]]

### Solution

```typescript
function generate(numRows: number): number[][] {
    if (numRows < 0) return [];

    const arr: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prev = arr[i - 1];
        const curr = [1];

        for (let j = 1; j < prev.length; j++) {
            curr.push(prev[j - 1] + prev[j]);
        }

        curr.push(1);
        arr.push(curr);
    }

    return arr;
}
```

### Key Insight
First and last element always 1.
Everything in between = sum of two elements above.

### Complexity
- Time: O(n²) | Space: O(n²)

---

**Streak: 47/184** 🔥