# Day 78/184 - September 16, 2026

## LeetCode 75: Maximum Depth of Binary Tree

### Problem

Given the root of a binary tree, find its maximum depth.

Example:

```text
      3
     / \
    9  20
       / \
      15  7

Maximum Depth = 3
```

### Solution

```typescript
function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    const ldepth = maxDepth(root.left);
    const rdepth = maxDepth(root.right);

    return 1 + Math.max(ldepth, rdepth);
};
```

### Approach

Use recursive DFS to find the depth of both subtrees.

`1 + max(left depth, right depth)` gives the depth of the current node.

### Key Insight

The maximum depth is the longest path from the root to a leaf.

### Complexity

* Time: O(n)
* Space: O(h)

---

**Streak: 78/184** 🔥
**LeetCode 75 Progress: 33/75**
