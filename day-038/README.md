# Day 38/184 - August 7, 2026

## Understanding: Max Consecutive Ones III

### Problem
Find maximum consecutive 1s after flipping at most k zeros.
- Input: nums = [1,1,1,0,0,1,1,1,1,0], k = 2
- Output: 6 (flip zeros at indices 3,4 → [1,1,1,1,1,1,1,1,1,0])

### Problem Analysis

**Constraints:**
- Binary array (only 0s and 1s)
- Can flip at most k zeros to ones
- Find longest consecutive 1s possible

**Key Insight:**
This is finding longest subarray with at most k zeros.
When we "flip" zeros, they become 1s.
So longest valid subarray = longest with ≤ k zeros.

### Sliding Window Approach (Not yet implemented)

Pattern:
Expand window: add elements from right
Count zeros in window
If zeros > k: shrink from left
Track maximum window length


### Why Sliding Window?
- Fixed constraint (k zeros max)
- Find longest subarray
- Add/remove strategy works
- O(n) vs O(n²)

### Next Steps
- Implement the solution
- Handle edge cases
- Verify with examples

### Reflection
Understanding problem > rushing to code.
Identifying pattern before implementation.
Structured thinking beats random coding.

---

**Streak: 38/184** 🔥