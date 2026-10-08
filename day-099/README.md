# Day 99/184

## LeetCode 75: Keys and Rooms

### Problem

n rooms, room 0 unlocked, each room has keys to others.
Can you visit all rooms?

### Solution

```typescript
function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>();
  const stack: number[] = [0];

  while (stack.length > 0) {
    const room = stack.pop()!;

    if (visited.has(room)) continue;

    visited.add(room);

    for (const key of rooms[room]) {
      if (!visited.has(key)) {
        stack.push(key);
      }
    }
  }

  return visited.size === rooms.length;
}
```

### Key Insight

Rooms = nodes. Keys = directed edges.
Reachability problem from node 0.

### Complexity

- Time: O(V+E) | Space: O(V)

---

**Streak: 99/184** 🔥
