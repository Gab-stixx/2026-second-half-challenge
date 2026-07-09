# Day 8/184 - July 8, 2026

## LeetCode 75: Problem 1 - Merge Strings Alternately

### Problem
Merge two strings by adding letters in alternating order.
- Input: word1 = "abc", word2 = "pqrs"
- Output: "apbqcrs"

### Approach
1. **Find max length:** Get longest string length
2. **Loop:** Iterate from 0 to maxLength
3. **Push conditionally:** Add from str1 if exists, then str2 if exists
4. **Join:** Convert array to string

### Solution
```typescript
for (let i = 0; i < maxLength; i++) {
    if (i < w1.length) w.push(w1[i]);
    if (i < w2.length) w.push(w2[i]);
}
```

### Complexity
- **Time:** O(n + m) single pass through both strings
- **Space:** O(n + m) for result array

### Key Learning
Boundary checking prevents undefined values. Handle different lengths elegantly.

---

**Streak: 8/184** 🔥