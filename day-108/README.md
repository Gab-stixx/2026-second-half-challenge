# Day 108/184 — Evaluate Division

## Overview

LeetCode 399: Evaluate Division.

After spending yesterday trying to understand the problem and its approach, I finally implemented the solution today.

I decided to solve it using both Breadth First Search (BFS) and Depth First Search (DFS) because I wanted to understand how both approaches work.

## Understanding the Problem

We are given three inputs: `equations`, `values`, and `queries`.

The `equations` array contains pairs of variables. The `values` array contains the result of dividing the first variable by the second variable in each pair. The `queries` array contains the divisions we need to calculate.

For example, suppose we have:

```typescript
equations = [
  ["a", "b"],
  ["b", "c"],
];
values = [2.0, 3.0];
queries = [
  ["a", "c"],
  ["b", "a"],
  ["a", "e"],
  ["a", "a"],
];
```

This means:

```text
a / b = 2
b / c = 3
```

Since `a / b = 2` and `b / c = 3`, we can calculate `a / c` by multiplying the two results.

```text
a / c = (a / b) * (b / c)
a / c = 2 * 3
a / c = 6
```

Similarly, since `a / b = 2`, then `b / a = 1 / 2 = 0.5`.

The answers to the four queries are:

```typescript
[6.0, 0.5, -1.0, 1.0];
```

The third answer is `-1.0` because the variable `e` is unknown. The fourth answer is `1.0` because any known variable divided by itself equals `1`.

## Building the Graph

The first thing I do is create a graph using a `Map`.

```typescript
const graph = new Map<string, [string, number][]>();
```

Each variable becomes a node, and each equation creates a connection between two variables. The number attached to each connection is its weight.

For `a / b = 2`, I create two connections.

```typescript
graph.get("a")!.push(["b", 2]);
graph.get("b")!.push(["a", 1 / 2]);
```

The first connection represents `a / b = 2`. The second represents `b / a = 0.5`.

This is important because we may need to travel through the graph in either direction.

For example, if we know `a / b = 2` and `b / c = 3`, the graph allows us to move from `a` to `b`, then from `b` to `c`.

The total result is calculated by multiplying the weights along the path.

## Solution 1: BFS

```typescript
function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][],
): number[] {
  const graph = new Map<string, [string, number][]>();

  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const value = values[i];

    if (!graph.has(A)) graph.set(A, []);
    if (!graph.has(B)) graph.set(B, []);

    graph.get(A)!.push([B, value]);
    graph.get(B)!.push([A, 1 / value]);
  }

  const results: number[] = [];

  for (const [src, dst] of queries) {
    if (!graph.has(src) || !graph.has(dst)) {
      results.push(-1);
      continue;
    }

    if (src === dst) {
      results.push(1.0);
      continue;
    }

    const visited = new Set<string>();
    const queue: [string, number][] = [[src, 1.0]];
    let found = -1;

    while (queue.length > 0) {
      const [node, product] = queue.shift()!;

      if (node === dst) {
        found = product;
        break;
      }

      visited.add(node);

      for (const [neighbor, weight] of graph.get(node)!) {
        if (!visited.has(neighbor)) {
          queue.push([neighbor, product * weight]);
        }
      }
    }

    results.push(found);
  }

  return results;
}
```

### How BFS Works

BFS uses a queue, which follows the First In, First Out principle. The first item added to the queue is the first item removed.

For every query, I first check whether both variables exist in the graph. If either variable is unknown, I return `-1`.

If the source and destination are the same known variable, the answer is `1`.

Otherwise, I create a visited set and a queue.

```typescript
const visited = new Set<string>();
const queue: [string, number][] = [[src, 1.0]];
```

The queue stores two things: the current variable and the product of the weights used to reach it.

I start with the source variable and a product of `1.0` because I haven't travelled through any edges yet.

Suppose I want to calculate `a / c`, with `a / b = 2` and `b / c = 3`.

The queue starts like this:

```text
[["a", 1]]
```

I remove `a` from the queue. Its neighbour is `b`, and the connection has a weight of `2`.

I multiply the current product by that weight.

```text
1 * 2 = 2
```

I add `b` to the queue with a product of `2`.

```text
[["b", 2]]
```

Next, I remove `b`. Its neighbour `c` has a connection weight of `3`.

```text
2 * 3 = 6
```

I add `c` to the queue with a product of `6`.

When `c` is removed from the queue, I have reached the destination, so I save `6` as the answer and stop searching for that query.

That is the main idea behind the BFS solution. I keep exploring connections, multiplying the weights as I move, until I find the destination.

The `visited` set prevents the search from going around in circles when a variable has already been explored.

## Solution 2: DFS

```typescript
function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][],
): number[] {
  const graph = new Map<string, [string, number][]>();

  // Build graph
  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const value = values[i];

    if (!graph.has(A)) graph.set(A, []);
    if (!graph.has(B)) graph.set(B, []);

    graph.get(A)!.push([B, value]);
    graph.get(B)!.push([A, 1 / value]);
  }

  const results: number[] = [];

  // DFS for each query
  for (const [src, dst] of queries) {
    if (!graph.has(src) || !graph.has(dst)) {
      results.push(-1);
      continue;
    }

    if (src === dst) {
      results.push(1.0);
      continue;
    }

    const visited = new Set<string>();

    function dfs(node: string, product: number): number {
      if (node === dst) return product;

      visited.add(node);

      for (const [neighbor, weight] of graph.get(node)!) {
        if (!visited.has(neighbor)) {
          const result = dfs(neighbor, product * weight);
          if (result !== -1) return result;
        }
      }

      return -1;
    }

    results.push(dfs(src, 1.0));
  }

  return results;
}
```

### How DFS Works

DFS uses Depth First Search. Instead of exploring connections level by level using a queue, it follows one path as far as possible before returning to explore another path.

In this implementation, I use recursion instead of a queue.

The `dfs` function takes two arguments.

```typescript
function dfs(node: string, product: number): number;
```

`node` is the variable I'm currently visiting. `product` is the result of multiplying the weights along the path I've followed so far.

The first thing the function checks is whether the current variable is the destination.

```typescript
if (node === dst) return product;
```

If it is, I've found the answer, so I return the accumulated product.

Otherwise, I mark the current variable as visited and check its neighbours.

```typescript
visited.add(node);
```

For each unvisited neighbour, I call DFS again, multiplying the current product by the edge weight.

```typescript
const result = dfs(neighbor, product * weight);
```

Using the same example, `a / b = 2` and `b / c = 3`, the search starts at `a` with a product of `1`.

DFS moves from `a` to `b`, giving a product of `1 * 2 = 2`.

It then moves from `b` to `c`, giving a product of `2 * 3 = 6`.

Since `c` is the destination, the function returns `6`. That result travels back through the recursive calls until it reaches the original query.

If a path doesn't lead to the destination, the function continues checking other unvisited neighbours. If no path works, it returns `-1`.

This line is what allows the answer to travel back through the recursive calls once the destination has been found.

```typescript
if (result !== -1) return result;
```

If every possible path has been explored without finding the destination, DFS returns `-1`.

## BFS vs DFS

Both implementations build the same graph and use the same edge weights. The difference is how they explore it.

| BFS                                              | DFS                                                           |
| ------------------------------------------------ | ------------------------------------------------------------- |
| Uses a queue                                     | Uses recursion and the call stack                             |
| Explores level by level                          | Follows one path before exploring another                     |
| Stores the current node and product in the queue | Passes the current node and product through function calls    |
| Stops when the destination is found              | Returns through recursive calls when the destination is found |

For this problem, both approaches can find the answer because we only need to find a path between two variables and multiply its edge weights.

## Complexity

Let `V` be the number of unique variables, `E` the number of equations, and `Q` the number of queries.

Building the graph takes `O(V + E)` time and space.

For each query, the search can visit every variable and connection in the graph, taking `O(V + E)` time in the worst case.

The total time complexity is `O(V + E + Q(V + E))`.

The graph requires `O(V + E)` space. Each query also uses up to `O(V)` extra space for the visited set and either the queue or the recursive call stack.

## Key Learning

After struggling to understand the problem yesterday, I finally implemented both BFS and DFS today.

Trying both helped me see that the graph representation and multiplication logic remain the same. What changes is how we explore the graph.

BFS uses a queue to explore level by level, while DFS follows a path using recursion.

The biggest thing I took from this problem is that understanding the relationship between the variables makes the implementation much easier to follow.

---

Challenge progress: 108/184 days.
