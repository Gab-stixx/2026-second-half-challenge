# Day 120/184

## LeetCode 75: Maximum Subsequence Score

### Problem

Pick k indices. Score = sum(nums1) × min(nums2). Maximize.

- Input: nums1=[1,3,3,2], nums2=[2,1,3,4], k=3
- Output: 12

### Approach

1. Sort pairs by nums2 descending
2. Min heap tracks k largest nums1 values
3. Score = currentSum × current nums2 (guaranteed minimum)

### Key Insight

Sorting by nums2 desc means current nums2 is always the minimum.
Min heap keeps k largest nums1 for maximum sum.

### Status

Solution implemented. Logic understood on paper.
Not fully comfortable yet — will revisit.

### Complexity

- Time: O(n log n)
- Space: O(k)

---

**Streak: 120/184** 🔥
