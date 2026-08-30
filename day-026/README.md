# Day 26/184 - July 26, 2026

## Warm-up: Length of Last Word

### Problem
Find the length of the last word in a string.
- Input: "Hello World"
- Output: 5

### Solution

```typescript
function lengthOfLastWord(s: string): number {
    return s.trim().split(/\s+/).at(-1).length;
}
```

### Line by Line
- `trim()` - Remove leading/trailing spaces
- `split(/\s+/)` - Split by one or more whitespace
- `at(-1)` - Get last element (negative indexing)
- `length` - Length of that word

### Complexity
- Time: O(n)
- Space: O(n) for split array

### Reflection
Stressful day. Long day. Still committed.
Consistency isn't always intensity.
Sometimes it's just showing up.

26 days done. LeetCode 75 resumes tomorrow.

---

**Streak: 26/184** 🔥