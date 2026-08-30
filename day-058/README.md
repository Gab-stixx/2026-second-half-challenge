# Day 58/184 - August 27, 2026

## LeetCode 75: Equal Row and Column Pairs ✅

### Problem
Count pairs where a row equals a column (element by element).
- Input: [[3,2,1],[1,7,6],[2,7,7]] → 1

### Solution

```typescript
function equalPairs(grid: number[][]): number {
    const n = grid.length;
    const rowMap: Record<string, number> = {};
    let count = 0;

    for (const row of grid) {
        const key = row.join(",");
        rowMap[key] = (rowMap[key] || 0) + 1;
    }

    for (let col = 0; col < n; col++) {
        const colArr: number[] = [];
        for (let row = 0; row < n; row++) {
            colArr.push(grid[row][col]);
        }
        const key = colArr.join(",");
        count += rowMap[key] || 0;
    }

    return count;
}
```

### Why Strings?
Comparing arrays directly doesn't work in JS (reference equality).
Converting to "3,2,1" makes comparison simple and reliable.

### Complexity
- Time: O(n²) | Space: O(n²)

### Key Learning
Hash map turns O(n³) brute force into O(n²).

---

**Streak: 58/184** 🔥