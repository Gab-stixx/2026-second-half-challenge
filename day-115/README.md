# Day 115/184 — Kth Largest Element in an Array

**Problem:** LeetCode 215 — Kth Largest Element in an Array

## Problem Summary

Given an array of numbers and an integer `k`, return the kth largest element. The goal is to find it without necessarily sorting the entire array.

## My Three Attempts

**1. Sorting in descending order**

I sorted the entire array in descending order and returned the element at index `k - 1`.

- Time: `O(n log n)`
- Space: Depends on the sorting implementation.

This worked, but it didn't take advantage of the heap concepts I was learning.

**2. Using a sorted array as a min-heap alternative**

I inserted elements into a normal array, sorted it in ascending order, and removed the smallest element whenever the array length exceeded `k`. I then returned the smallest remaining element.

This approach resulted in TLE because repeatedly sorting the array is expensive.

**3. Implementing a MinHeap**

I created a `MinHeap` class with these methods:

- `push(val)`: Adds an element and calls `bubbleUp()` to restore the heap property.
- `pop()`: Removes the smallest element, replaces the root with the last element, and calls `sinkDown()`.
- `peek()`: Returns the smallest element without removing it.
- `size()`: Returns the current number of elements.

### Implementation

```typescript
function findKthLargest(nums: number[], k: number): number {
  class MinHeap {
    private heap: number[] = [];

    push(val: number) {
      this.heap.push(val);
      this.bubbleUp();
    }

    pop(): number {
      const top = this.heap[0];
      const last = this.heap.pop()!;
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.sinkDown();
      }
      return top;
    }

    peek(): number {
      return this.heap[0];
    }
    size(): number {
      return this.heap.length;
    }

    private bubbleUp() {
      let i = this.heap.length - 1;
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.heap[parent] <= this.heap[i]) break;
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      }
    }

    private sinkDown() {
      let i = 0;
      while (true) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }

        if (
          right < this.heap.length &&
          this.heap[right] < this.heap[smallest]
        ) {
          smallest = right;
        }

        if (smallest === i) break;

        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      }
    }
  }

  const myHeap = new MinHeap();

  for (const num of nums) {
    myHeap.push(num);

    if (myHeap.size() > k) {
      myHeap.pop();
    }
  }

  return myHeap.peek();
}
```

## How the Optimal Approach Works

1. Insert each number into the min-heap.
2. If the heap contains more than `k` elements, remove its smallest element.
3. Continue until every number has been processed.
4. Return the root using `peek()`.

The heap never holds more than `k` elements. Removing the smallest whenever the size exceeds `k` ensures that the heap retains the `k` largest elements encountered so far. Its smallest element is therefore the kth largest element in the original array.

## Complexity Analysis

Let `n` be the number of elements in `nums`.

- **Time:** `O(n log k)` — each insertion costs at most `O(log k)`, and a removal, when needed, also costs `O(log k)`.
- **Auxiliary space:** `O(k)` — the heap holds at most `k` elements.

## Key Lesson

Solving a problem multiple times helped me move from a straightforward sorting solution, through an inefficient implementation, to a solution that uses a heap effectively. Implementing `bubbleUp()` and `sinkDown()` also gave me a more practical understanding of how a binary min-heap works.

**Streak: 115/184**
