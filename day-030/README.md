# Day 30/184 - July 30, 2026

## LeetCode 75: Problem 12 - Is Subsequence

### Problem
Check if s is a subsequence of t.
- s = "ace", t = "abcde" → true
- s = "aec", t = "abcde" → false

### Solution

```typescript
function isSubsequence(s: string, t: string): boolean {
    let stay = 0;

    for (let move = 0; move < t.length; move++) {
        if (stay < s.length && t[move] === s[stay]) {
            stay++;
        }
    }

    return stay === s.length;
}
```

### How It Works

s = "ace", t = "abcde"

move=0, t[0]='a': 'a'===s[0]? Yes → stay=1
move=1, t[1]='b': 'b'===s[1]? No
move=2, t[2]='c': 'c'===s[1]? Yes → stay=2
move=3, t[3]='d': 'd'===s[2]? No
move=4, t[4]='e': 'e'===s[2]? Yes → stay=3

stay(3) === s.length(3)? → return true ✓


### Complexity
- **Time:** O(t.length) - single pass through t
- **Space:** O(1) - two pointers only

### Key Insight
Greedy works: take first matching character.
No need to explore alternatives.
Order matters, but not adjacency.

### Key Learning
Two pointers on single string vs two strings.
Greedy approach eliminates backtracking.

---

**Streak: 30/184** 🔥