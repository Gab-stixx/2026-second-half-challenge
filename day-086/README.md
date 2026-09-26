# Day 86/184 - September 25, 2026

## LeetCode 75: Longest ZigZag Path in a Binary Tree

### Problem

Find the longest ZigZag path in a binary tree.

A ZigZag path alternates between left and right child nodes.

### Solution

```typescript
function longestZigZag(root: TreeNode | null): number {
    let maxLen = 0;

    function depthFirstSearch(node: TreeNode | null, dir: string, len: number): void {
        if (node === null) return;

        maxLen = Math.max(maxLen, len);

        if (dir === "left") {
            depthFirstSearch(node.left, "left", 1);
            depthFirstSearch(node.right, "right", len + 1);
        }

        if (dir === "right") {
            depthFirstSearch(node.left, "left", len + 1);
            depthFirstSearch(node.right, "right", 1);
        }
    }

    depthFirstSearch(root.left, "left", 1);
    depthFirstSearch(root.right, "right", 1);

    return maxLen;
};
```

### Approach

Use DFS while keeping track of:

* The previous direction
* The current ZigZag length

If the next move changes direction, increase the length.

If it continues in the same direction, reset the length to `1`.

### Key Insight

The previous direction determines whether the next edge continues the ZigZag or starts a new one.

### Complexity

* Time: O(n)
* Space: O(h)

---

**Streak: 86/184** 🔥
**LeetCode 75 Progress: 37/75**
