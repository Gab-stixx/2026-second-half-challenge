# Day 71/184 - September 9, 2026

## LeetCode 75: Delete the Middle Node of a Linked List

### Problem

Given the head of a linked list, delete the middle node and return the head.

### Solution

```typescript
function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return null;

    let slow = head;
    let fast = head;
    let prev: ListNode | null = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next!;
        fast = fast.next.next;
    }

    prev!.next = slow.next;

    return head;
}
```

### Why Slow & Fast Pointers?

Slow moves one node at a time while fast moves two.

When fast reaches the end, slow is at the middle node.

`prev` keeps track of the node before slow so the middle node can be skipped.

### Key Insight

Two pointers can find the middle of a linked list in one traversal without counting the nodes first.

### Complexity

* Time: O(n)
* Space: O(1)

---

**Streak: 71/184** 🔥
