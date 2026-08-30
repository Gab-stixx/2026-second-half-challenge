# Day 25/184 - July 25, 2026

## Revisited: Valid Anagram (Optimal Solution)

### Day 23 Approach (Sort + Join)
- Time: O(n log n)
- Space: O(n)

### Day 25 Approach (Hash Map - OPTIMAL)

```typescript
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const count = {};
    
    // Count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    // Decrement for each character in t
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    
    return true;
}
```

### How It Works
1. If lengths differ → not anagrams
2. Count frequency of each character in s
3. For each char in t, decrement its count
4. If any count goes negative → not anagrams
5. If all survive → anagrams

### Complexity
- **Time:** O(n) - two single passes
- **Space:** O(1) - max 26 characters (constant)

### Comparison
| Approach | Time | Space |
|----------|------|-------|
| Sort | O(n log n) | O(n) |
| Hash Map | O(n) | O(1) |

### Key Learning
Don't move forward without optimizing backward.
Revisiting problems teaches optimization instincts.
Sort is convenient; hash map is optimal.

---

**Streak: 25/184** 🔥