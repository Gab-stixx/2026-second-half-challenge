# Day 81/184 - September 19, 2026

## LeetCode 75: Count Good Nodes in Binary Tree

### Problem

Count the number of good nodes in a binary tree.

A node is good if its value is greater than or equal to every value on the path from the root to that node.

### Solution

```typescript
function depthFirstSearch(node: TreeNode | null, maxSince: number): number {
    if (node === null) {
        return 0;
    }

    let count = 0;

    if (node.val >= maxSince) {
        count = 1;
    }

    maxSince = Math.max(maxSince, node.val);

    count += depthFirstSearch(node.left, maxSince);
    count += depthFirstSearch(node.right, maxSince);

    return count;
}

function goodNodes(root: TreeNode | null): number {
    return depthFirstSearch(root, root.val);
};
```

### Approach

Use DFS to traverse the tree while carrying the maximum value seen on the current path.

If the current node is greater than or equal to that maximum, count it as a good node.

### Key Insight

Keep track of the maximum value for each path as the recursion moves down the tree.

### Complexity

* Time: O(n)
* Space: O(h)

---

**Streak: 81/184** 🔥
**LeetCode 75 Progress: 35/75**
