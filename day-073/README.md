# Day 73/184 - September 11, 2026

## LeetCode 75: Odd Even Linked List

### Problem

Group all nodes at odd positions together followed by nodes at even positions.

Example:

```text
1 → 2 → 3 → 4 → 5
↓
1 → 3 → 5 → 2 → 4
```

### Solution

```typescript
function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    
    let odd: ListNode | null = head;
    let even: ListNode | null = head.next;
    let evenHead: ListNode | null = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};
```

### Why Pointers?

Use separate pointers for the odd and even nodes and rearrange their connections while traversing the list.

`evenHead` keeps the start of the even list so it can be attached after the odd list.

### Key Insight

The list can be rearranged in-place without creating a new list.

### Complexity

* Time: O(n)
* Space: O(1)

---

**Streak: 73/184** 🔥
**LeetCode 75 Progress: 30/75**
