# Day 113/184 — Rotting Oranges

## Overview

LeetCode 994: Rotting Oranges.

The goal is to determine the minimum number of minutes required for all fresh oranges in a grid to become rotten. If some fresh oranges can never rot, the answer is `-1`.

## My Implementation

```typescript
function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue: [number, number][] = [];
  let freshCount = 0;
  let minutes = 0;

  // Add all rotten oranges to queue, count fresh
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      if (grid[r][c] === 1) freshCount++;
    }
  }

  // BFS
  while (queue.length > 0 && freshCount > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols)
          continue;
        if (grid[newRow][newCol] !== 1) continue;

        grid[newRow][newCol] = 2;
        freshCount--;
        queue.push([newRow, newCol]);
      }
    }

    minutes++;
  }

  return freshCount > 0 ? -1 : minutes;
}
```

## Understanding the Logic

### 1. Initializing the grid

I first get the number of rows and columns, define the four possible directions, and create a queue.

The first nested loop does two things. It adds every initially rotten orange to the queue and counts every fresh orange.

This matters because rot spreads from all initially rotten oranges at the same time, not just from one starting point.

### 2. Why use a queue?

BFS uses a First In, First Out queue. In this problem, the queue allows me to process oranges according to how many minutes it takes for the rot to reach them.

For example, imagine the grid contains:

```text
2 1 1
1 1 1
1 1 1
```

At minute zero, only the orange in the top-left corner is rotten.

After one minute:

```text
2 2 1
2 1 1
1 1 1
```

After two minutes:

```text
2 2 2
2 2 1
2 1 1
```

Each minute, the oranges that were already rotten spread the rot to their fresh neighbours. Newly rotten oranges are added to the queue to spread rot during the next minute.

### 3. Why save the queue size?

This is one of the most important parts of the solution.

```typescript
const size = queue.length;
```

The queue may contain oranges that became rotten during earlier minutes. I save its current size so I know exactly how many oranges to process during the current minute.

```typescript
for (let i = 0; i < size; i++) {
```

Even when new oranges are added to the queue inside this loop, the saved `size` does not change. Those new oranges wait until the next minute's iteration.

Without this separation, newly rotten oranges could spread the rot immediately during the same minute, which would give an incorrect time calculation.

### 4. How do I find neighbouring oranges?

```typescript
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
```

Each pair represents a movement.

`[0, 1]` moves right.

`[0, -1]` moves left.

`[1, 0]` moves down.

`[-1, 0]` moves up.

For each rotten orange, I calculate the row and column of each neighbour.

```typescript
const newRow = row + dr;
const newCol = col + dc;
```

I skip any position outside the grid and any position that does not contain a fresh orange.

```typescript
if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;
if (grid[newRow][newCol] !== 1) continue;
```

If the neighbour contains a fresh orange, I turn it rotten, decrease the fresh count, and add it to the queue.

```typescript
grid[newRow][newCol] = 2;
freshCount--;
queue.push([newRow, newCol]);
```

Changing the cell to `2` immediately also prevents another rotten orange from infecting and adding that same orange again.

### 5. Why do I check both the queue and fresh count?

```typescript
while (queue.length > 0 && freshCount > 0)
```

The queue must contain oranges that can spread rot, and there must still be fresh oranges left to infect.

If the fresh count reaches zero, all oranges have rotted, so there is no need to continue.

If the queue becomes empty while fresh oranges remain, there is no rotten orange left that can reach them.

### 6. Why increment minutes after the inner loop?

```typescript
minutes++;
```

The inner loop processes all oranges that can spread rot during the current minute. Once they have all been processed, one minute has elapsed.

This is why the counter belongs outside the inner loop but inside the BFS loop.

### 7. How does the function return the answer?

```typescript
return freshCount > 0 ? -1 : minutes;
```

If fresh oranges remain, some were unreachable, so the function returns `-1`.

Otherwise, it returns the number of minutes needed to rot all the oranges.

If there are no fresh oranges from the beginning, the BFS loop never runs and the function correctly returns `0`.

## Complexity Analysis

Let `R` be the number of rows and `C` be the number of columns.

Time complexity: `O(R × C)` because the grid is scanned initially, and each orange is added to the queue at most once. Note that using `queue.shift()` in JavaScript or TypeScript can involve shifting array elements, so this particular implementation may have additional overhead in the worst case. A queue implemented with a moving head index avoids that overhead.

Space complexity: `O(R × C)` in the worst case because the queue can hold many grid positions.

## Key Learning

I implemented the BFS solution, but I haven't fully grasped every part of the logic yet.

The main things I need to get comfortable with are how the saved queue size separates each minute, how newly rotten oranges wait until the next round, and how `freshCount` helps determine when to stop.

I'm learning that understanding an algorithm sometimes takes more than writing it once. Revisiting the logic is part of the process.

---

Challenge progress: 113/184 days.
