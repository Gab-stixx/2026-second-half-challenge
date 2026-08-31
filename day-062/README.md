# Day 62/184 - August 31, 2026

## LeetCode 75: Removing Stars From a String

### Problem
Remove each star and its closest non-star character to the left.
- Input: "leet**cod*e"
- Output: "lecoe"

### First Attempt (Wrong)
Tried iterating backwards with splice. Didn't work.
Wrong tool for the job.

### Solution (Stack)

```typescript
function removeStars(s: string): string {
    const stack = [];

    for (let char of s) {
        if (char === "*") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
}
```

### Trace

s = "leet**cod*e"

'l' → ['l']
'e' → ['l','e']
'e' → ['l','e','e']
't' → ['l','e','e','t']
'' → ['l','e','e']
'' → ['l','e']
'c' → ['l','e','c']
'o' → ['l','e','c','o']
'd' → ['l','e','c','o','d']
'*' → ['l','e','c','o']
'e' → ['l','e','c','o','e']

return "lecoe" ✓


### Why Stack?
Stars always remove the most recently added character.
That's literally what LIFO means.

### Complexity
- Time: O(n) | Space: O(n)

### Key Learning
Right data structure = simple solution.
Wrong data structure = complicated mess.

---

**Streak: 62/184** 🔥