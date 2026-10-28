# Day 119/184 — Maximum Subsequence Score

**Problem:** LeetCode 2542 — Maximum Subsequence Score

## Today's Progress

Today was another day of understanding the problem before moving to implementation. After revisiting the approach from Day 118, I explored the reasoning behind combining sorting with a min-heap.

## What Became Clearer

The score is calculated as:

`sum(selected nums1 values) × minimum(selected nums2 values)`

The goal is to choose exactly `k` matching indices to maximize this score.

- **Sorting:** Sort pairs of corresponding values by `nums2` in descending order. At each position, the current `nums2` value can serve as the minimum for the group being considered.
- **Min-heap:** Keep the `k` largest `nums1` values among the candidates considered so far.
- **Running sum:** Track the sum of the values currently in the heap.
- **Score calculation:** Once the heap contains `k` values, multiply their sum by the current `nums2` value and update the maximum score.

The deeper insight is that the two techniques solve different parts of the problem: sorting helps manage the minimum multiplier, while the heap helps maximize the sum.

## Key Lesson

Revisiting a difficult problem can reveal details that were easy to miss the first time. Rather than rushing to code, I'm focusing on understanding why each step works.

**Streak: 119/184**
