# Day 23/184 - July 23, 2026

## Valid Anagram Problem - Optimal Solution

### Approach 1: Sort + Join (O(n log n))
```typescript
const sortedS = s.split("").sort().join();
const sortedT = t.split("").sort().join();
return sortedS === sortedT;
```

### Approach 2: Hash Map (OPTIMAL - O(n))
```typescript
if (s.length !== t.length) return false;

const count = {};

for (let char of s) {
    count[char] = (count[char] || 0) + 1;
}

for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
}

return true;
```

### How Optimal Works
1. Count each character in s
2. For each character in t, decrement count
3. If count goes negative = not anagram

### Complexity Comparison
| Approach | Time | Space |
|----------|------|-------|
| Sort | O(n log n) | O(n) |
| Hash Map | O(n) | O(1) |

---

**Streak: 23/184** 🔥