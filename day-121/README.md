# Day 121/184 — Total Cost to Hire K Workers

**Problem:** LeetCode 2462 — Total Cost to Hire K Workers

## Today's Focus

Today was about understanding the problem and figuring out how two min-heaps can help solve it efficiently.

## Problem Summary

We are given an array `costs`, an integer `k`, and another integer `candidates`.

We need to hire exactly `k` workers. During each hiring session:

- We consider up to `candidates` workers from the beginning of the remaining array.
- We also consider up to `candidates` workers from the end.
- We hire the worker with the lowest cost among those candidates.
- If two workers have the same cost, we choose the one with the smaller original index.

The goal is to return the total cost of hiring all `k` workers.

## Understanding the Approach

The main idea is to use **two min-heaps**.

- The first min-heap stores candidates from the beginning of the array.
- The second min-heap stores candidates from the end of the array.

At each hiring session:

1. Compare the smallest element at the top of both heaps.
2. Hire the worker with the lower cost.
3. If the costs are equal, use the smaller original index.
4. Add the selected worker's cost to the total.
5. Refill the heap from the same side with the next available worker, provided there are workers left to consider.

We also need to keep track of the left and right pointers so that we don't add the same worker to both heaps.

### Key Insight

Instead of repeatedly sorting the remaining workers, the two min-heaps allow us to retrieve the cheapest available candidate from each side efficiently.

## Key Lesson

This problem is another practical application of priority queues. I'm learning how heaps can help manage competing choices efficiently, especially when elements are continuously removed and replaced.

**Streak: 121/184**
