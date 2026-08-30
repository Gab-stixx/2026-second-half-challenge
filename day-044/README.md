# Day 44/184 - August 13, 2026

## LeetCode 75: Problem 18 - Find the Highest Altitude

### Problem
A biker starts at altitude 0. Find highest altitude reached.
- Input: gain = [-5,1,5,0,-7] → 1

### Approach 1: Prefix Array

```typescript
function largestAltitude(gain: number[]): number {
    const prefix: number[] = [];
    prefix[0] = 0;
    prefix[1] = gain[0];

    for (let i = 2; i <= gain.length; i++) {
        prefix[i] = prefix[i - 1] + gain[i - 1];
    }

    return Math.max(...prefix);
}
```

- Time: O(n) | Space: O(n)

### Approach 2: Running Sum (Optimal)

```typescript
function largestAltitude(gain: number[]): number {
    let current = 0;
    let max = 0;

    for (const g of gain) {
        current += g;
        max = Math.max(max, current);
    }

    return max;
}
```

- Time: O(n) | Space: O(1)

### Key Learning
Prefix sum doesn't always need a prefix array. Running variable does the same job.

---

**Streak: 44/184** 🔥