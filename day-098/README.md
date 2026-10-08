# Day 98/184 - October 6, 2026

## LeetCode 75: Keys and Rooms

### Problem

There are `n` rooms numbered from `0` to `n - 1`.

You start in room `0`. Each room may contain keys that can be used to unlock other rooms.

The goal is to determine whether all rooms can eventually be visited.

### Current Progress

I am still in the learning stage for this problem.

Rather than immediately writing code, I am focusing on understanding the problem itself and how the optimal approach works. I also watched some videos to help break down the problem.

### How I'm Thinking About It

The rooms and keys can be viewed as a graph:

- Each room represents a node.
- A key represents a connection to another room.
- Starting from room `0`, we need to explore every room that we can reach.
- We need to keep track of rooms that have already been visited.

This points toward a graph traversal approach such as DFS or BFS.

### Key Insight So Far

The main thing I need to understand is not just how to traverse the rooms, but why graph traversal is the natural way to model the problem.

I enjoy practical problems like this because they require understanding the situation first before thinking about the code.

Dota2 Senate was similar for me during the Queue section.

### Status

Learning the problem and optimal approach — implementation pending.

---

**Streak: 98/184** 🔥
