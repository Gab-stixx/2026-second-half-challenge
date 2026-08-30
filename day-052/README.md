# Day 52/184 - August 21, 2026

## LeetCode 75: Find the Difference of Two Arrays

### Problem
Return two lists — elements unique to nums1 and elements unique to nums2.
- Input: nums1=[1,2,3], nums2=[2,4,6]
- Output: [[1,3],[4,6]]

### Solution

```typescript
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1: Set<number> = new Set<number>(nums1);
    const set2: Set<number> = new Set<number>(nums2);

    nums1.forEach((num: number) => set2.delete(num));
    nums2.forEach((num: number) => set1.delete(num));

    return [Array.from(set1), Array.from(set2)];
}
```

### Alternative (cleaner, modern)

```typescript
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    return [
        Array.from(set1.difference(set2)),
        Array.from(set2.difference(set1))
    ];
}
```

### Why Sets Over Arrays
- Array lookup: O(n) → total O(n²)
- Set lookup: O(1) → total O(n+m)

### Complexity
- Time: O(n+m) | Space: O(n+m)

---

**Streak: 52/184** 🔥