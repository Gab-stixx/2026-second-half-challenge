# Day 9/184 - July 9, 2026

## LeetCode 75: Problem 2 - GCD of Strings

### Problem
Find the longest string that divides both input strings.
- Input: str1 = "ABABAB", str2 = "ABAB"
- Output: "AB"

### Approach
1. **Pattern Check:** If str1+str2 ≠ str2+str1, no GCD exists → return ""
2. **Find GCD Length:** Use Euclidean algorithm on string lengths
3. **Extract:** Return first gcdLength characters from str1

### Why It Works
If both strings repeat the same pattern:
- str1 = pattern × a
- str2 = pattern × b
- GCD(length1, length2) = len(pattern)

### Solution Insight
Instead of checking every possible substring, use math:
- Concatenation trick proves if pattern exists
- Euclidean algorithm finds pattern length
- Extract directly from original string

### Complexity
- **Time:** O(n + m) for concatenation + O(log(min(n,m))) for GCD
- **Space:** O(n + m) for string concatenation

### Key Learning
Mathematical insight >>> brute force. One clever observation simplifies the entire problem.

---

**Streak: 9/184** 🔥