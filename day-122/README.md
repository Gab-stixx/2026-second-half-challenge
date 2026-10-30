# Day 122/184 - October 30, 2026

## LeetCode 75: Total Cost to Hire K Workers

### Problem

Run k hiring sessions. Each session, look at the first `candidates` and last `candidates` workers remaining and hire the cheapest (ties go to the smaller index).

- Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
- Output: 11

### Approach: Two Min Heaps

- leftHeap holds the first `candidates` costs
- rightHeap holds the last `candidates` costs
- lo and hi point to the next unused workers in the middle
- Hire from the cheaper heap, then refill that heap from the middle if lo <= hi

### Solution

```typescript
function totalCost(costs: number[], k: number, candidates: number): number {
  class MinHeap {
    private heap: number[] = [];

    size(): number {
      return this.heap.length;
    }
    peek(): number {
      return this.heap[0];
    }

    push(val: number): void {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1);
    }

    pop(): number {
      const top = this.heap[0];
      const last = this.heap.pop()!;
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.heapifyDown(0);
      }
      return top;
    }

    private heapifyUp(i: number): void {
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.heap[parent] <= this.heap[i]) break;
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      }
    }

    private heapifyDown(i: number): void {
      while (true) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest])
          smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest])
          smallest = right;
        if (smallest === i) break;
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      }
    }
  }

  const n = costs.length;
  const leftHeap = new MinHeap();
  const rightHeap = new MinHeap();

  for (let i = 0; i < Math.min(candidates, n); i++) {
    leftHeap.push(costs[i]);
  }

  for (let i = Math.max(candidates, n - candidates); i < n; i++) {
    rightHeap.push(costs[i]);
  }

  let lo = candidates;
  let hi = n - candidates - 1;
  let total = 0;

  for (let session = 0; session < k; session++) {
    if (
      rightHeap.size() === 0 ||
      (leftHeap.size() > 0 && leftHeap.peek() <= rightHeap.peek())
    ) {
      total += leftHeap.pop();
      if (lo <= hi) {
        leftHeap.push(costs[lo]);
        lo++;
      }
    } else {
      total += rightHeap.pop();
      if (lo <= hi) {
        rightHeap.push(costs[hi]);
        hi--;
      }
    }
  }

  return total;
}
```

### Trace

```
costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4

leftHeap  = {17,12,10,2}
rightHeap = {2,11,20,8}
lo = 4, hi = 4

Session 1: left top 2 <= right top 2 → hire left, total = 2
           lo <= hi → push 7 into left, lo = 5
Session 2: left top 7 > right top 2 → hire right, total = 4
           lo > hi → no refill
Session 3: left top 7 <= right top 8 → hire left, total = 11

return 11
```

### Details

- The right heap starts at max(candidates, n - candidates) so no worker sits in both heaps on short arrays.
- Each session takes exactly one branch (left or right), and the refill check lives inside that branch.
- Ties go left because of the <= comparison.

### Bug Caught

The else was attached to the inner `if (lo <= hi)` instead of the outer hiring condition. Some sessions hired nobody, others hired twice.

### Complexity

- Time: O((candidates + k) log candidates)
- Space: O(candidates)

---

**Streak: 122/184** 🔥
