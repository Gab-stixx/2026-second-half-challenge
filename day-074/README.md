# Day 74/184 - September 12, 2026

## LeetCode 75: Reverse Linked List

### Problem

Given the head of a singly linked list, reverse the list and return the reversed list.

Example:

```text
1 → 2 → 3 → 4 → 5
↓
5 → 4 → 3 → 2 → 1
```

### Solution

```typescript
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
```

### Why Three Pointers?

`prev` stores the previous node, `current` is the node being processed, and `next` saves the next node before the link is reversed.

### Key Insight

Reverse each `next` pointer while traversing the list.

### Complexity

* Time: O(n)
* Space: O(1)

---

**Streak: 74/184** 🔥
**LeetCode 75 Progress: 31/75**
