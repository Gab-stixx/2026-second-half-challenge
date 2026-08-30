# Day 37/184 - August 6, 2026

## LeetCode 75: Problem 15 - Maximum Vowels in Substring of Given Length

### Problem
Find maximum vowels in any substring of length k.
- Input: s = "abciiidef", k = 3
- Output: 3 (substring "iii")

### Solution (Sliding Window)

```typescript
function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }

    let maxVowel = count;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            count++;  // Add new element
        }
      
        if (vowels.has(s[i - k])) {
            count--;  // Remove old element
        }
      
        maxVowel = Math.max(maxVowel, count);
    }

    return maxVowel;
}
```

### How It Works

s = "abciiidef", k = 3

Step 1: Count vowels in first k
"abc" → count = 1 (a)
maxVowel = 1

Step 2: Slide window
i=3: add 'i'(+1), remove 'a'(-1) → count = 1
i=4: add 'i'(+1), remove 'b'(0) → count = 2
i=5: add 'i'(+1), remove 'c'(0) → count = 3 → maxVowel = 3
i=6: add 'd'(0), remove 'i'(-1) → count = 2
i=7: add 'e'(+1), remove 'i'(-1) → count = 2
i=8: add 'f'(0), remove 'e'(-1) → count = 1

Return: 3


### Same Pattern as Day 36

Day 36: Count sum in window
Day 37: Count vowels in window

Structure identical:
- Initial window calculation
- Slide by adding new, removing old
- Track maximum

### Complexity
- **Time:** O(n) - two passes
- **Space:** O(1) - vowel set constant size

### Key Learning
Pattern recognition saves time.
See structure once, apply everywhere.
Sliding window is universal.

---

**Streak: 37/184** 🔥