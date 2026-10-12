# Day 101/184 — Number of Provinces

## Overview

LeetCode 547: Number of Provinces

The task is to count the number of provinces in a group of cities. Cities belong to the same province if they are directly or indirectly connected.

## My Approach

I used Depth-First Search (DFS) with an adjacency matrix.

- `isConnected[i][j]` indicates whether city `i` is connected to city `j`.
- A `Set` named `visited` keeps track of cities already explored.
- DFS explores all cities connected to the current city.
- Each time I find an unvisited city, I start a new DFS and increment the province count.

## Key Learning

This was my first time getting comfortable with a 2D matrix of the form `[][]`. Understanding how to access each row and column took some time, but repeated practice helped me get the hang of it.

## Complexity

- Time: O(n²), because the matrix may be scanned for each city.
- Space: O(n), for the visited set and DFS call stack.

---

Challenge progress: 101/184 days.
