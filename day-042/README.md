# Day 42/184 - August 11, 2026

## LeetCode 75: Problem 17 - Longest Subarray of 1s (Deeper Analysis)

### Problem
Delete exactly one element from binary array. Find longest subarray of 1s remaining.

### Two Arrays Approach (Discovered Today)

Loop 1: fill left array → left = [1, 2, 0, 1, 2]
Loop 2: fill right array → right = [2, 1, 0, 2, 1]
Loop 3: for each zero, answer = left[i-1] + right[i+1]

### Trace

Array: [1,1,0,1,1]
left = [1,2,0,1,2]
right = [2,1,0,2,1]
At i=2 (zero): left[1] + right[3] = 2 + 2 = 4 ✓


### Complexity
- Time: O(n)
- Space: O(n) — two extra arrays

### Note
Still in exam season. Still showing up.

---

**Streak: 42/184** 🔥
