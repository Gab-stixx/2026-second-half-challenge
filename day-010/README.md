# Day 10/184 - July 10, 2026

## LeetCode 75: Problem 3 - Kids With The Greatest Number of Candies

### Problem
Determine which kids will have the greatest number of candies after getting extra candies.
- Input: candies = [2,3,5,1,3], extraCandies = 3
- Output: [false,true,true,false,true]

### Approach
1. **Find max once:** Calculate Math.max(candies) before loop
2. **Check each kid:** If candies[i] + extra >= max → true
3. **Build result:** Push true/false for each kid

### Solution
```typescript
const maxCandies = Math.max(...candies);  // O(n) once
for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxCandies);
}
```

### Complexity
- **Time:** O(n) - one pass for max, one pass for checking
- **Space:** O(n) - result array

### Key Learning
Performance optimization: Don't calculate inside loops what you can calculate once outside.
This was O(n²) until I moved Math.max() out. Simple fix, big difference.

---

**Streak: 10/184** 🔥