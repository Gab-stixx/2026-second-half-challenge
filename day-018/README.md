# Day 18/184 - July 18, 2026

## Training: Maximum Depth of Binary Tree

### Problem
Find the maximum depth (height) of a binary tree.
- Depth = number of nodes along longest path from root to leaf

### Solution Approach

```typescript
function maxDepth(root: TreeNode | null): number {
    // Base case: empty tree has depth 0
    if (root === null) {
        return 0;
    }

    // Recursively find depths of left and right subtrees
    const ldepth = maxDepth(root.left);
    const rdepth = maxDepth(root.right);

    // Current node depth = 1 + max of children depths
    return 1 + Math.max(ldepth, rdepth);
}
```

### How It Works

Recursion breakdown:
                         3
                        / \
                        9  20
                           / \
                          15  7