# Day 12/184 - July 12, 2026

## LeetCode: Implement Stack from Two Queues

### Problem
Build a stack using only queues (FIFO data structure).
Must achieve LIFO behavior from FIFO operations.

### Solution Approach

```typescript
push(x):
  1. Add x to queue2
  2. Move all elements from queue1 → queue2
  3. Swap queue1 and queue2
  
pop():
  Return queue1.shift() (front element is newest)
```

### Why It Works
- New element + all old elements in queue2
- After swap, newest is at front of queue1
- Pop takes from front (newest first = LIFO)

### Complexity
- **Push:** O(n) - moves all existing elements
- **Pop:** O(1) - just remove from front
- **Top:** O(1) - peek front
- **Space:** O(n) for two queues

### Key Learning
Reverse engineering data structures with constraints teaches deep algorithm design.
FIFO to LIFO conversion requires clever reordering.

---

**Streak: 12/184** 🔥