# Day 15/184 - July 15, 2026

## LeetCode 75: Problem 6 - Reverse Words in a String

### Problem
Reverse the order of words in a string.
Handle multiple spaces, leading/trailing spaces.
- Input: s = "  Hello World  "
- Output: "World Hello"

### Solution

```typescript
const word = s.trim().split(/\s+/);
let left = 0;
let right = word.length - 1;

while (left < right) {
    [word[left], word[right]] = [word[right], word[left]];
    left++;
    right--;
}

return word.join(" ");
```

### Key Components
- **trim():** Remove leading/trailing spaces
- **/\s+/:** Regex for one or more whitespace (handles multiple spaces)
- **Two pointers:** Reverse words array
- **join(" "):** Rejoin with single space

### Why It Works
- Regex handles all spacing variations
- Two-pointer reversal is efficient
- Single space join removes extra spaces

### Complexity
- **Time:** O(n) - trim + split + reverse
- **Space:** O(n) - words array

### Key Learning
Regex + two pointers = elegant solution.
Pattern recognition: Same technique, different problems.

---

**Streak: 15/184** 🔥