# Day 116/184 — Smallest Number in Infinite Set

**Problem:** LeetCode 2336 — Smallest Number in Infinite Set

## What I Learned

The problem models an infinite set of positive integers and supports two operations:

- `popSmallest()`: Removes and returns the smallest available number.
- `addBack(num)`: Adds a number back if it is not already available.

My main takeaway today is that when a problem repeatedly asks for the minimum or maximum element, a **heap or priority queue** is often worth considering.

## Understanding the Approach

We cannot store every positive integer because the set is infinite. Instead, we can track the smallest number that has not yet been removed and use a min-heap to manage numbers that have been added back.

The key observations are:

1. Initially, the smallest available number is `1`.
2. Each `popSmallest()` returns the smallest available number.
3. If a previously removed number is added back, it may become the next smallest number.
4. We need to avoid adding duplicates.

This problem can be solved efficiently with a min-heap for numbers added back and a variable to track the next untouched positive integer.

## Key Lesson

Recognizing the right data structure is an important part of problem-solving. I'm learning to consider heaps when a problem repeatedly needs the smallest or largest available element.

**Streak: 116/184**
