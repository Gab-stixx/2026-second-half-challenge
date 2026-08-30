# Day 41/184 - August 10, 2026

## LeetCode 75: Problem 17 - Longest Subarray of 1s After Deleting One Element

### Problem
Delete exactly one element from binary array. Find longest subarray of 1s remaining.
- Input: [1,1,0,1] → 3

### Pattern Found (No code yet)
This is Max Consecutive Ones III in disguise.
k=1 (can only allow one zero in window → delete it)

### Approach (Planned)
Two arrays + three loops:
- Loop 1: fill left array → consecutive 1s from left
- Loop 2: fill right array → consecutive 1s from right
- Loop 3: for each zero, answer = left[i-1] + right[i+1]

### Status
Pattern recognized. Implementation tomorrow.

### Note
Doing this during school exam season. Consistency over comfort.

---

**Streak: 41/184** 🔥