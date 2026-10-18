# Day 110/184

## LeetCode 75: Nearest Exit from Entrance in Maze

### Problem
Find nearest exit from entrance in maze.
Exit = border empty cell, not entrance itself.
- Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+"","."]], entrance=[1,0]
- Output: 2

### Solution

```typescript
function nearestExit(maze: string[][], entrance: number[]): number {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    const visited = new Set<string>();
    const queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];

    visited.add(`${entrance[0]},${entrance[1]}`);

    while (queue.length > 0) {
        const [row, col, steps] = queue.shift()!;

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const key = `${newRow},${newCol}`;

            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;
            if (visited.has(key)) continue;
            if (maze[newRow][newCol] === '+') continue;

            if (newRow === 0 || newRow === rows - 1 || newCol === 0 || newCol === cols - 1) {
                return steps + 1;
            }

            visited.add(key);
            queue.push([newRow, newCol, steps + 1]);
        }
    }

    return -1;
}
```

### Why BFS not DFS?
BFS finds SHORTEST path.
DFS finds A path, not necessarily shortest.
For "nearest" → always BFS.

### Key Detail
Use string key "row,col" for visited Set.
Arrays fail as Set keys (reference equality).

### Complexity
- Time: O(m×n) | Space: O(m×n)

---

**Streak: 110/184** 🔥