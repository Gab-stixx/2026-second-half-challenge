# Day 109/184 — Nearest Exit from Entrance in Maze

## Overview

LeetCode 1926: Nearest Exit from Entrance in Maze.

The goal is to find the minimum number of steps from the entrance to the nearest exit in a maze.

## Understanding the Problem

The maze is represented as a 2D array. Each cell contains either:

`"+"` for a wall that cannot be crossed, or `"."` for an empty cell that can be visited.

The entrance is given as a row and column coordinate.

An exit is any empty cell on the boundary of the maze, but the entrance itself does not count as an exit.

## Approach

The optimal approach is Breadth-First Search (BFS).

I plan to use a queue to explore the maze one step at a time.

1. Add the entrance to the queue, starting at distance `0`.
2. Explore the four possible directions: up, down, left, and right.
3. Skip positions that are outside the maze, walls, or already visited.
4. Track the distance travelled as each position is explored.
5. When I reach a boundary cell other than the entrance, return its distance.
6. If the queue becomes empty without finding an exit, return `-1`.

## Key Learning

BFS is useful for shortest-path problems in an unweighted graph because it explores all positions at one distance before moving to positions farther away.

The main challenge is translating the 2D maze into a graph traversal while correctly handling boundaries, walls, and visited cells.

## Complexity

If the maze has `R` rows and `C` columns:

Time: `O(R × C)`, because each cell is processed at most once.

Space: `O(R × C)` in the worst case for the queue and visited tracking.

## Status

Problem and approach understood. Implementation is next.

---

Challenge progress: 109/184 days.
