# Day 76/184 - September 14, 2026

## LeetCode 75: Maximum Twin Sum of a Linked List

### Problem

Find the maximum twin sum of a linked list.

For an even-length list, the first and last nodes form a pair, the second and second-last form another pair, and so on.

Example:

```text
5 → 4 → 2 → 1

5 + 1 = 6
4 + 2 = 6

Maximum Twin Sum = 6
```

### Solution

```typescript
function pairSum(head: ListNode | null): number {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let left = head;
    let right = prev;
    let maxSum = 0;

    while (right) {
        maxSum = Math.max(maxSum, left.val + right.val);
        left = left.next;
        right = right.next;
    }

    return maxSum;
};
```

### Approach

1. Find the middle using slow/fast pointers.
2. Reverse the second half.
3. Traverse both halves and calculate the twin sums.

### Key Insight

Reversing the second half allows the twin nodes to be compared from the same direction without using extra space.

### Complexity

* Time: O(n)
* Space: O(1)

---

**Streak: 76/184** 🔥
**LeetCode 75 Progress: 32/75**
