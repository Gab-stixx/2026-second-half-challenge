# Day 107/184 — Evaluate Division

## Overview

LeetCode 399: Evaluate Division.

The goal is to answer division queries using a set of known equations.

## Progress

After struggling to understand the problem yesterday, I finally got a clearer understanding of the approach today.

## Approach

The problem can be represented as a weighted graph:

- Each variable is a node.
- Each equation creates a connection between two variables.
- The division result becomes the edge's weight.
- Graph traversal can find a path between two variables and multiply the edge weights to calculate the result.

For example, if `a / b = 2` and `b / c = 3`, then `a / c = 2 × 3 = 6`.

If no path connects two variables, or a variable is unknown, the answer is `-1.0`. A query involving a variable divided by itself returns `1.0` if that variable is known.

## Key Learning

Understanding the problem comes before implementation. After spending time making sense of the inputs and the graph representation, I'm ready to start coding the solution.

## Status

Approach understood; implementation begins next.

---

Challenge progress: 107/184 days.
