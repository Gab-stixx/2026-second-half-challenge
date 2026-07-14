# Day 13/184 - July 13, 2026

## LeetCode 75: Problem 4 - Can Place Flowers

### Problem
Determine if you can plant n new flowers in a flowerbed.
- Rules: Can only plant if current plot and both neighbors are empty (0)
- Input: flowerbed = [1,0,0,0,1], n = 1
- Output: true (plant at index 2)

### Solution Approach

```typescript
for (let i = 0; i < flowerBedLength; i++) {
    const leftNeighbor = i === 0 ? 0 : flowerbed[i - 1];
    const rightNeighbor = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
    
    if (leftNeighbor + flowerbed[i] + rightNeighbor === 0) {
        flowerbed[i] = 1;  // Plant
        n--;
    }
}
return n <= 0;
```

### Why It Works
Greedy approach: Plant whenever possible, left to right.
Sum = 0 means all three are empty. Plant immediately.
Adjacent plantings never block each other.

### Complexity
- **Time:** O(n) - single pass through array
- **Space:** O(1) - modify input in place

### Key Learning
Greedy strategies work when local optimization = global optimization.
Simple solution > complex algorithms.

---

**Streak: 13/184** 🔥