# Day 56/184 - August 25, 2026

## LeetCode 75: Determine if Two Strings are Close ✅

### Problem
Check if two strings are close using swaps and character transformations.
- Input: "aacabb" and "bbcbaa" → true

### Solution

```typescript
function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const freqMap1: Record<string, number> = {};
    for (const char of word1) {
        freqMap1[char] = (freqMap1[char] || 0) + 1;
    }

    const freqMap2: Record<string, number> = {};
    for (const char of word2) {
        freqMap2[char] = (freqMap2[char] || 0) + 1;
    }

    const keys1 = Object.keys(freqMap1).sort();
    const keys2 = Object.keys(freqMap2).sort();

    const values1 = Object.values(freqMap1).sort();
    const values2 = Object.values(freqMap2).sort();

    return values1.join() === values2.join() && keys1.join() === keys2.join();
}
```

### Key Insight
Not checking if frequencies match per character.
Checking if the multiset of frequencies is the same.

### Bug Caught
Was writing into freqMap1 while building freqMap2.
One variable name typo. Wrong map. Wrong result. Details matter.

### Complexity
- Time: O(n log n) | Space: O(1) max 26 characters

---

**Streak: 56/184** 🔥