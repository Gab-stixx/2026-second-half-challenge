# Day 67/184 - September 5, 2026

## LeetCode 75: Number of Recent Calls

### Problem
Count requests made in last 3000ms.
- ping(1) → 1
- ping(100) → 2
- ping(3001) → 3
- ping(3002) → 3 (t=1 fell out of range)

### Solution

```typescript
class RecentCounter {
    constructor(private queue: number[] = []) {}

    ping(t: number): number {
        this.queue.push(t);

        while (this.queue[0] < (t - 3000)) {
            this.queue.shift();
        }

        return this.queue.length;
    }
}
```

### Trace

```
ping(1): queue=[1] → return 1
ping(100): queue=[1,100] → return 2
ping(3001): queue=[1,100,3001] → return 3
ping(3002): queue=[1,100,3001,3002]
1 < 2 → shift!
queue=[100,3001,3002] → return 3
```


### Why Queue?
Requests always arrive in increasing order.
Oldest always fall out first.
FIFO = perfect for sliding time windows.

### Key Insight
Sliding window on TIME not array indices.
Same pattern, different context.

### Complexity
- Time: O(1) amortized | Space: O(n)

---

**Streak: 67/184** 🔥