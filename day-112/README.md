# Day 112/184 — Rotting Oranges

## Overview

LeetCode 994: Rotting Oranges.

The task is to find the minimum number of minutes required for all fresh oranges in a grid to become rotten. If some fresh oranges can never rot, the answer is `-1`.

## Understanding the Problem

The grid contains three possible values.

`0` represents an empty cell.

`1` represents a fresh orange.

`2` represents a rotten orange.

Every minute, a rotten orange causes any fresh orange directly above, below, to its left, or to its right to become rotten.

Diagonal oranges are not affected.

## Approach

The optimal approach is multi-source BFS.

Instead of starting a separate search for every rotten orange, I add all initially rotten oranges to the queue at the beginning.

I then process the queue level by level. Each level represents one minute passing, during which all rotten oranges from the previous level can infect their adjacent fresh oranges.

Whenever a fresh orange becomes rotten, I add it to the queue so it can spread the rot during the next minute.

I also keep track of the number of fresh oranges. Each time one becomes rotten, I decrease that count.

When the queue is empty, I check the remaining fresh oranges. If any remain, I return `-1`. Otherwise, I return the number of minutes elapsed.

## Key Learning

The important idea is that all initially rotten oranges spread the rot simultaneously. Multi-source BFS handles this naturally by putting every starting rotten orange into the queue before the traversal begins.

## Complexity

If the grid has `R` rows and `C` columns:

Time: `O(R × C)`, because each cell is processed at most once.

Space: `O(R × C)` in the worst case for the queue.

## Status

Problem and approach understood. Implementation is next.

---

Challenge progress: 112/184 days.
