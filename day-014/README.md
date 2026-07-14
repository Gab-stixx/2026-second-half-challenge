# Day 14/184 - July 14, 2026

## LeetCode 75: Problem 5 - Reverse Vowels in a String

### Problem
Reverse only the vowels in a string, keep consonants in place.
- Input: s = "hello"
- Output: "holle" (e and o swapped)

### Solution Approach

```typescript
function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let word = s.split("");
    let len = word.length;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        if (!vowels.has(word[left])) {
            left++;
        } else if (!vowels.has(word[right])) {
            right--;
        } else {
            [word[left], word[right]] = [word[right], word[left]];
            left++;
            right--;
        }
    }

    return word.join("");
};
```

### Why It Works
- Two pointers start at ends
- Skip consonants, find vowels
- Swap vowels when both found
- Move inward until pointers meet
- Case-sensitive (A ≠ a both are vowels)

### Complexity
- **Time:** O(n) - single pass with two pointers
- **Space:** O(1) - in-place swapping

### Key Learning
Two-pointer pattern continues to shine.
Consonants act as anchors; only vowels move.

---

**Streak: 14/184** 🔥