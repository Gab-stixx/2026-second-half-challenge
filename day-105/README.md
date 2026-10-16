# Day 105/184 — Reorder Routes to Make All Paths Lead to the City Zero

## Overview

LeetCode 1466: Reorder Routes to Make All Paths Lead to the City Zero.

The task is to find the minimum number of roads to reverse so every city can reach city `0`.

## My Approach

I revisited yesterday's solution and changed the traversal from BFS using a queue to DFS using a stack.

First, I built an adjacency list that stores each road in both directions with a cost:

- `1` means the road points away from city `0` along the traversal and needs to be reversed.
- `0` means the road already points toward city `0` along that connection.

Starting from city `0`, I use a stack to explore connected cities. A `visited` set prevents processing a city more than once, and I add each required reversal to `changes`.

## Key Learning

Revisiting the problem made the approach clearer than it was yesterday. Switching from a queue to a stack also helped me practise DFS, which is the focus of this section.

I'm learning that understanding can take more than one attempt, and that's okay. The goal is to understand the reasoning behind the solution, not just submit code that passes.

## Complexity

- Time: O(n), since each city and road is processed a constant number of times.
- Space: O(n), for the adjacency list, visited set, and stack.

---

Challenge progress: 105/184 days.
