# Day 104/184 — Reorder Routes to Make All Paths Lead to the City Zero

## Overview

LeetCode 1466: Reorder Routes to Make All Paths Lead to the City Zero.

The goal is to find the minimum number of roads to reverse so that every city can reach city `0`.

## My Approach

I implemented a Breadth-First Search (BFS) solution using an adjacency list.

Each road is stored in both directions, with a cost indicating whether traversing that connection means the original road needs to be reversed.

- `graph[a].push([b, 1])` means the original road goes from `a` to `b`. Reaching `a` from city `0` through this road requires reversing it.
- `graph[b].push([a, 0])` represents the same connection in the opposite traversal direction. No reversal is needed for that direction.
- A queue processes cities, while a `visited` set prevents revisiting them.
- The total cost is added to `changes`, which gives the number of reversals.

## Key Learning

Although my solution was accepted, I haven't fully understood why the approach works. Getting the correct output isn't the same as understanding the logic.

I plan to revisit the problem and work through the graph traversal step by step until the reasoning becomes clear.

## Complexity

- Time: O(n), because each city and road is processed a constant number of times.
- Space: O(n), for the adjacency list, visited set, and queue.

---

Challenge progress: 104/184 days.
