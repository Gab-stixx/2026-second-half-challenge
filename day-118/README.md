# Day 118/184 — Maximum Subsequence Score

**Problem:** LeetCode 2542 — Maximum Subsequence Score

## Today's Focus

Today, I focused on understanding the approach before implementing the solution.

The problem gives two arrays, `nums1` and `nums2`, and an integer `k`. We must choose exactly `k` matching indices and maximize:

`(sum of selected nums1 values) × (minimum selected nums2 value)`

## Understanding the Approach

The main idea is to combine **sorting with a min-heap**.

1. Pair each `nums1[i]` with its corresponding `nums2[i]`.
2. Sort the pairs by their `nums2` values in descending order.
3. Traverse the sorted pairs. At each step, treat the current `nums2` value as the minimum `nums2` value in the selected group.
4. Use a min-heap to keep the `k` largest `nums1` values among the pairs considered so far.
5. Once the heap contains `k` elements, calculate the score using the sum of those elements multiplied by the current `nums2` value. Keep track of the maximum score.

### Why does this work?

Because the pairs are processed in descending order of `nums2`, the current `nums2` value is the smallest `nums2` value among the pairs considered so far.

The min-heap helps us retain the largest `k` values from `nums1` among those candidates. This gives us the largest possible sum for that minimum `nums2` value.

## Key Lesson

The important part today was understanding how sorting establishes the minimum `nums2` value while the min-heap helps maximize the sum of `nums1` values.

I'm learning not to rush into coding before I understand how the pieces work together.

**Streak: 118/184**
